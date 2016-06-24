# Importing 'movie' to use 'Movie' class which is inside it.
import movie
# Importing 'moviecatalog' to call 'generate_html_page' method.
import moviecatalog

# Basic structure of our object created using class 'Movie', shows in which order we have to pass arguments.
# we passed arguments in this sequence.
# 1. Name of the movie.
# 2. Small movie description.
# 3. Starcast in the movie.
# 4. Rating of the movie.
# 5. Official poster image link.
# 6. Official youtube trailer link.

'''movie_name = movie.Movie("Name_of_the_movie",
                    "Movie_description",                    
                    "Starcast",
                    "rating",
                    "Poster_image_url",
                    "official_trailer_url")'''


# Created first object named 'ddlj' for movie Dilwale Dulhania Le Jayenge .
ddlj = movie.Movie("Dilwale Dulhania Le Jayenge",
                   "Dilwale Dulhania Le Jayenge (English: The Big-Hearted Will Take Away the Bride)," 
                   "also known by the initialism DDLJ, is an Indian romance film written and directed"
                   " by Aditya Chopra and produced by Yash Chopra. Released on 20 October 1995, the film "
                   "stars Shah Rukh Khan and Kajol.",
                   "Shah Rukh Khan, Kajol",
                   "4.3",
                   "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Dilwale"
                   "_Dulhania_Le_Jayenge_poster.jpg/220px-Dilwale_Dulhania_Le_Jayenge_poster.jpg",
                   "https://www.youtube.com/watch?v=EIKZ7amRGwk")

# Created onother object named 'captain_america' for movie Captain America: Civil War. 
captain_america = movie.Movie("Captain America: Civil War",
                              "Captain America: Civil War is an upcoming American superhero film featuring the "
                              "Marvel Comics character Captain America, produced by Marvel Studios and distributed "
                              "by Walt Disney Studios Motion Pictures. It is intended to be the sequel to 2011's "
                              "Captain America: The First Avenger and 2014's Captain America: The Winter Soldier, "
                              "and the thirteenth film of the Marvel Cinematic Universe (MCU).",
                              "Chris Evans, Robert Downey, Jr., Scarlett Johansson",
                              "4.5",
                              "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Captain_"
                              "America_Civil_War_poster.jpg/220px-Captain_America_Civil_War_poster.jpg",
                              "https://www.youtube.com/watch?v=QGfhS1hfTWw")



# Created onother object named 'x_men' for movie X-Men: Apocalypse. 
x_men = movie.Movie("X-Men: Apocalypse",
                    "X-Men: Apocalypse is an upcoming 2016 American superhero film based on the X-Men "
                    "characters that appear in Marvel Comics. It is intended to be the sequel to 2014's "
                    "X-Men: Days of Future Past and the ninth installment in the X-Men film series. "
                    "Directed by Bryan Singer", 
                    "James McAvoy, Michael Fassbender, Jennifer Lawrence",                   
                    "3.9",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/X-Men"
                    "_-_Apocalypse.jpg/220px-X-Men_-_Apocalypse.jpg",
                    "https://www.youtube.com/watch?v=N0io2w_6vT8")


# Created onother object named 'walk_to_remember' for movie A Walk to Remember. 
walk_to_remember = movie.Movie("A Walk to Remember",
                   "A Walk to Remember is a 2002 American coming-of-age romantic drama film directed by "
                   "Adam Shankman and written by Karen Janszen, based on Nicholas Sparks' 1999 novel of "
                   "the same name. The film stars Shane West, Mandy Moore, Peter Coyote, and Daryl Hannah, "
                   "and was produced by Denise Di Novi and Hunt Lowry for Warner Bros.",
                   "Shane West, Mandy Moore, Peter Coyote, Daryl Hannah",
                   "4.9",
                   "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Walk_to_Remember_"
                   "Poster.jpg/220px-A_Walk_to_Remember_Poster.jpg",
                   "https://www.youtube.com/watch?v=i72wRvPw_ik")



# Created onother object named 'Forrest_Gump' for movie Forrest Gump. 
Forrest_Gump = movie.Movie("Forrest Gump",
                           "The story depicts several decades in the life of Forrest Gump, a slow-witted and naive, "
                           "but good-hearted and athletically prodigious man from Alabama who witnesses, and in some "
                           "cases influences, some of the defining events of the latter half of the 20th century in "
                           "the United States; more specifically, the period between Forrest's birth in 1944 and 1982.",
                           "Tom Hanks, Robin Wright, Gary Sinise",
                           "5.0",
                           "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_"
                           "Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
                           "https://www.youtube.com/watch?v=eYSnxZKTZzU")


# Created onother object named 'The_Breakfast_Club' for movie The Breakfast Club. 
The_Breakfast_Club = movie.Movie("The Breakfast Club",
                    " The storyline follows five teenagers, each a member of a different high school clique, "
                    "who spend a Saturday in detention together and come to realize that they are all more than "
                    "their respective stereotypes, while facing a strict disciplinarian principal.",                    
                    "Emilio Estevez, Paul Gleason, Anthony Michael Hall",
                    "5.0",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Breakfast_"
                    "Club.jpg/220px-The_Breakfast_Club.jpg",
                    "https://www.youtube.com/watch?v=BSXBvor47Zs")


# Created onother object named 'Criminal' for movie Criminal. 
Criminal = movie.Movie("Criminal",
                    "Criminal is an upcoming American action thriller drama film directed by Ariel Vromen "
                    "and written by Douglas Cook and David Weisberg. The film is about an ex-con who is "
                    "implanted with a dead CIA agent's memories to finish an assignment.",                    
                    " Kevin Costner, Gary Oldman, Tommy Lee Jones",
                    "3.7",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Criminal_2016_"
                    "poster.jpg/220px-Criminal_2016_poster.jpg",
                    "https://www.youtube.com/watch?v=3bvnoqsvY-M")


# Created onother object named 'War_Dogs' for movie War Dogs. 
War_Dogs = movie.Movie("War Dogs",
                    "War Dogs (previously known as Arms and the Dudes) is an upcoming 2016 American "
                    "biographical criminal war comedy film directed by Todd Phillips and written by "
                    "Phillips, Jason Smilovic and Stephen Chin, based on the Rolling Stone article by Guy Lawson.",                    
                    "Jonah Hill, Miles Teller",
                    "4.1",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/War_Dogs_2016_"
                    "poster.jpg/220px-War_Dogs_2016_poster.jpg",
                    "https://www.youtube.com/watch?v=Rwh9c_E3dJk")


# Created onother object named 'The_Lego_Batman_Movie' for movie The Lego Batman Movie. 
The_Lego_Batman_Movie = movie.Movie("The Lego Batman Movie",
                    "The Lego Batman Movie (stylized as The LEGO Batman Movie) is an upcoming 2017 American "
                    "3D computer-animated superhero/action comedy film. It is a spin-off of the 2014 film The "
                    "Lego Movie, featuring the DC Comics character Batman.",                    
                    " Will Arnett, Ralph Fiennes, Michael Cera",
                    "5.0",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/The_Lego_Batman_Movie_PromotionalPoster"
                    ".jpg/220px-The_Lego_Batman_Movie_PromotionalPoster.jpg",
                    "https://www.youtube.com/watch?v=aBJyp2LFHgk")

# Created onother object named 'Swiss_Army_Man' for movie Swiss Army Man. 
Swiss_Army_Man = movie.Movie("Swiss Army Man",
                    "Swiss Army Man is a 2016 American comedy-drama film written and directed by Dan "
                    "Kwan and Daniel Scheinert. The film stars Daniel Radcliffe, Mary Elizabeth "
                    "Winstead and Paul Dano. The film is scheduled to be released on June 17, 2016, by A24.",                    
                    " Paul Dano, Daniel Radcliffe, Mary Elizabeth Winstead",
                    "3.9",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Swiss_Army_Man_"
                    "poster.png/220px-Swiss_Army_Man_poster.png",
                    "https://www.youtube.com/watch?v=yrK1f4TsQfM")

# Created onother object named 'Search_Party' for movie Search Party. 
Search_Party = movie.Movie("Search Party",
                    "Search Party is a 2014 American comedy film directed by Scot Armstrong "
                    "in his directorial debut, and co-written with Mike Gagerman and Andrew "
                    "Waller based on a story by Gagerman and Waller.",                    
                    " T. J. Miller, Adam Pally, Thomas Middleditch",
                    "4.2",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Search_party_xlg"
                    ".jpg/220px-Search_party_xlg.jpg",
                    "https://www.youtube.com/watch?v=Xpb33JVe1IE")


# Created onother object named 'Lights_Out' for movie Lights Out. 
Lights_Out = movie.Movie("Lights Out",
                    "Lights Out is an upcoming 2016 American supernatural horror film directed "
                    "and written by David F. Sandberg, based on Sandberg's 2013 short film of the "
                    "same name. The film stars Teresa Palmer and Gabriel Bateman. Principal photography "
                    "began on June 29, 2015. It is scheduled to be released on July 22, 2016.",                    
                    " Teresa Palmer, Gabriel Bateman",
                    "3.7",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Lights_Out_2016_poster."
                    "jpg/220px-Lights_Out_2016_poster.jpg",
                    "https://www.youtube.com/watch?v=6LiKKFZyhRU")

# Next thing we have to do is to display all information in a webpage.
# So for all this we have created a list named 'passlist'.
# Now 'passlist' will contain all objects of the movie that we have created earlier. 
passlist = [captain_america,
            x_men,
            walk_to_remember,
            Forrest_Gump,
            The_Breakfast_Club,
            Criminal,
            War_Dogs,
            ddlj,
            The_Lego_Batman_Movie,
            Swiss_Army_Man,
            Search_Party,
            Lights_Out]

# Remember we have imported a package named 'moviecatalog'.
# Now we will use this package to generate a webpage.
# we will call a function inside this package named 'generate_html_page'.
# So in this next step we have called this function and passing 'passlist' as argument.

moviecatalog.generate_html_page(passlist)