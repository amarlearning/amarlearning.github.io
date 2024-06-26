+++
title = "Docker - the right way"
date = "2022-01-23T00:00:00-00:00"
description = "Docker - the right way - Best practices for using Docker in production to improve security, optimize image size and write cleaner and more maintainable Dockerfiles."

tags = [ "docker", "best-practices", "infrastructure", "iac", "devops", "containers", "security"]
+++

![banner](/images/docker-the-right-way/banner.png)

Docker is a software framework for building, running, and managing containers on servers and the cloud. Here are the several best practices for using Docker in production to improve security, optimize image size and write cleaner and more maintainable Dockerfiles.

---

### 1. Use Official Docker Image as Base Image

Always use the official or verified base image when writing the docker file. Let's say you are developing a java application and want to build it and run it as a docker image. Instead of taking a base operating system image and installing java, maven, and other tools you need for your application.

```shell
FROM ubuntu

RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;
```

---

Use the official Java image for your application. This will not only make your docker file cleaner but also let you use an official and verified image which is already built using the best practices.

```shell
FROM openjdk
```

---

### 2. Use specific Image Version

As you see from the previous script we have chosen `OpenJDK` as our base image, but now when we build our application image from the above docker file, it will always use the **latest** tag of the `OpenJDK` image.

```shell
# Is same as FROM openjdk:latest
FROM openjdk
```

---

The problem here is that we might get a different image version as in the previous build and the new image version may break stuff or cause unexpected behavior, so the **latest** tag is unpredictable, we don't know exactly which image we are getting. So instead of the random latest image tag, we need to fixate the version. **We should be as specific as possible with the image version.**

```shell
FROM openjdk:11-alpine
```

---

### 3. Use small sized Official Image

There are multiple official images of `openjdk` not only with different version numbers but also with the different operating system distribution, so the question here is **which one to choose?** and **does it even matter?**

If the image is based on a **full-blown operating system distribution** like ubuntu or centos which has a bunch of tools already packaged in, which makes the **image size large**. But most of the time, we don't need these tools in our application image.

In contrast, having smaller images means, we need less storage space in the image repository as well as on a deployment server and of course, we can transfer the images faster when pulling or pushing them from the repository.

In addition to the size, there is another issue with images on a full-blown operating system with lots of tools installed and that is a **security issue** because such a base usually contains hundreds of known vulnerabilities and basically creates a larger attack surface to your application image.

In comparison, using smaller images with leaner operating system distribution which bundle the necessary system tools and libraries, we are minimizing the attack surface and building more secure images.

---

### 4. Minimize the Number of Layers

Every line in our `Dockerfile` will be treated as an image layer. Each layer increases the size of images since they are cached. Therefore, as the number of layers increases, the size also increases. It's always a good idea to combine `RUN`, `COPY`, and `ADD` commands as much as possible since they create layers.

You can test this out with the `docker history` command:

```shell
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
dockerfile   latest    194f98552a02   37 seconds ago   218MB

$ docker history 194f98552a02

IMAGE            CREATED BY                                       SIZE
194f98552a02     COPY . . # buildkit                              6.71kB
<missing>        RUN /bin/sh -c pip install -r requirem..         35.5MB
<missing>        COPY requirements.txt . # buildkit               58B
<missing>        WORKDIR /app
```

---

If we see the above logs carefully, we can notice only the `RUN`, `COPY`, and `ADD` command adds size to the image. we can reduce the image size by combining commands wherever possible. For example:

```shell
RUN apt-get update
RUN apt-get install -y openjdk-8-jdk
```

---

Can be combined into a single `RUN` command:

```shell
RUN apt-get update && apt-get install -y openjdk-8-jdk
```

---

Thus, creating a single layer instead of multiple, which reduces the size of the final image.

---

### 5. Optimize Caching Image Layers

Docker images are built based on Dockerfile. In Dockerfile, each line generates its layer during the building process. The layers are also cached and reused between different building processes if no changes are detected.

Let's take a look at the dockerfile based on a node alpine image:

```shell
FROM node:17.0.1-alpine

WORKDIR /app

COPY project /app

RUN npm install --production

CMD ["node", "src/index.js"]
```

---

As we discussed before each line creates its cached layer. Let's build this docker image and see what is happening.

```shell
Step 1/5 : FROM node:17.0.1-alpine
17.0.1-alpine: Pulling from library/node
Digest: sha256:959c4fc79a753b8b797c4fc9da967c7a81b4a3a3ff93d484dfe00092bf9fd584
Status: Downloaded newer image for node:17.0.1-alpine
 ---> c0fc1c9c473b
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> f665e3b63c98
Step 3/5 : COPY project /app
 ---> 8d4971fa2f3b
Step 4/5 : RUN npm install --production
 ---> Running in a5eac87912ce

up to date, audited 1 package in 371ms

found 0 vulnerabilities
Removing intermediate container a5eac87912ce
 ---> 9c21576cad06
Step 5/5 : CMD ["node", "src/index.js"]
 ---> Running in 1ff9c5bb72e7
Removing intermediate container 1ff9c5bb72e7
 ---> 9783eef2c1d3
Successfully built 9783eef2c1d3
Successfully tagged dockerfile:latest
```

---

Docker image from docker file was built completely from scratch, so it took 1 minute to build. Let's try to build again and see.

```shell
Step 1/5 : FROM node:17.0.1-alpine
 ---> c0fc1c9c473b
Step 2/5 : WORKDIR /app
 ---> Using cache
 ---> f665e3b63c98
Step 3/5 : COPY project /app
 ---> Using cache
 ---> 8d4971fa2f3b
Step 4/5 : RUN npm install --production
 ---> Using cache
 ---> 9c21576cad06
Step 5/5 : CMD ["node", "src/index.js"]
 ---> Using cache
 ---> 9783eef2c1d3
Successfully built 9783eef2c1d3
Successfully tagged dockerfile:latest
```

---

A few lines of logs. As you can see this is **Using cache** text in multiple lines and the whole process took less than 1 sec. This is the power of layer caching. Nothing here was built from scratch, every layer comes from the cache.

**Important thing is,** If any layer is created from scratch because of some changes in the source file, every next layer is built from scratch too.

The best practice here is to order docker file commands from least to most frequently change to take advantage of caching and this way we can optimize how fast the image gets built.

---

### 6. Use .dockerignore to Exclude Files and Folder

We should use the `.dockerignore` file to list all the files and folders that we want to exclude. we can create the `.dockerignore` file in the root directory and list all the files and folders we want to ignore.

When building the image, docker will look at the contents and ignore anything specified inside. Matching is done using [Go](https://go.dev/)'s `filepath.Match` rules.

A sample `.dockerignore` file would look like:

```shell
# ignore .git and .cache folders
.git
.cache

# ignore all markdown files
*.md

# ignore sensitive files
private.key
settings.json
```

---

### 7. Make use of Multi-stage builds

Let's assume that there are some contents in our project, that we need for building the image so during the build process but we don't need them in the final image itself to run the application.

For example in a Java-based application, we need JDK to compile the Java source code but JDK is not needed to run the Java application. In addition to that, we also use build tools like Maven or Gradle to build our Java application and those are also not needed in the final image.

Multi-stage builds allow us to use multiple temporary images during the build process but keep only the latest image as the final image. Let's see how it is done.

```shell
# Build stage
FROM tomcat AS build

RUN apt-get update \
    && apt-get -y install maven

WORKDIR /app

copy project /app

RUN mvn package

# Runtime stage
FROM tomcat

COPY --from=build /app/target/file.war /usr/local/tomcat/webapps

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/usr/local/tomcat/webapps/file.war"]
```

---

Let's also look at the size comparison between two stages:

```shell
REPOSITORY                 TAG         IMAGE ID          SIZE
docker-single              latest      8d6b6a4d7fb6      259MB
docker-multi               latest      813c2fa9b114      156MB
```

---

### 8. Use the Least Privileged User or Non-Root User

By default, Docker runs container processes as root inside of a container. However, this is a bad practice since a process running as root inside the container is running root in the docker host. Thus, if an attacker gains access to our container, they have access to all the root privileges and can perform several attacks on the Docker host, like:

- Copying sensitive info from the host's filesystem to the container.
- Executing remote commands.

To prevent this, we should run container processes with a non-root user or less privileged user.

```shell
...

# create group and user
RUN groupadd -r amar && useradd -g amar amar

# set ownership and permissions
RUN chown -R amar:amar /app

# switch to user
USER amar

...
```

---

> Some base images already have a generic user bundled in which we can use. For example, the node image already bundles a user called a `node`.

---

### 9. Scan Images for Vulnerabilities

Once we build the image, we should scan the image for security vulnerabilities using the `docker scan` command. We need to be logged in to the Docker Hub to run the docker scan command to scan our images.

```shell
$ docker scan hello-world

Testing hello-world...

Organization:      docker-desktop-test
Package manager:   linux
Project name:      docker-image|hello-world
Docker image:      hello-world
Licenses:          enabled

✓ Tested 0 dependencies for known issues, no vulnerable paths found.

Note that we do not currently have vulnerability data for your image.
```

---

In the background, Docker uses called [Snyk](https://snyk.io/) to do the vulnerability scanning of the images. The scan uses a database of vulnerabilities that gets constantly updated so new ones get discovered and added all the time for different images.

---

### Summary

1. Use Official Docker Image as Base Image.
2. Use specific Image Version.
   - Do not use a random latest image tag
   - Fixate the version
   - The more specific, the better
3. Use small sized Official Image.
   - Base image could not be based on full blown OS
   - Use image based on a leaner and smaller OS distribution like [Alpine](https://www.alpinelinux.org/)
   - Full blown operating system introduce more security vulnerabilities
4. Minimize the Number of Layers.
   - RUN, COPY and ADD each create layers.
   - Each layer contain the difference from the previous layer.
   - Layers increase the size of the final image.
5. Optimize Caching Image Layers.
   - Order dockerfile command from least to most frequently changing.
6. Use .dockerignore to Exclude Files and Folder.
   - Use .dockerignore to explicitly exclude files and folders
7. Make use of Multi-stage builds.
   - Multi-stage builds can decrease the size of our production images.
   - Small image size potentially means small attack surface.
8. Use the Least Privileged User or Non-Root User
9. Scan Images for Vulnerabilities

Follow all the above mentioned practices to make your Docker image leaner and more secure.
