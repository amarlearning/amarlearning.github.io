var bassAnim = function(el) {
    var head = el.getElementById('head'),
        torso = el.getElementById('torso'),
        shoulderRight = el.getElementById('shoulderRight'),
        shoulderLeft = el.getElementById('shoulderLeft'),
        handLeft = el.getElementById('handLeft'),
        armLeft = el.getElementById('armLeft'),
        guitar = el.getElementById('guitar'),
        armRight = el.getElementById('armRight'),
        handRight = el.getElementById('handRight');

    TweenMax.to(head, .25, {y:4, x:3, rotationZ:-4, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true });
    TweenMax.to([torso, guitar, armRight], .5, {x:-2, y:4, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to([torso, shoulderRight, shoulderLeft], .5, {y:4, repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(handLeft, .25, {x:2, y:2, rotationZ:-16, transformOrigin:"10% 60%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(handRight, .5, {x:-5, y:4, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(guitar, 1, {rotationZ:2, repeat:-1, ease:Back.easeOut, yoyo:true});
};
bassAnim(document.querySelector("svg#bass"));


var pharrellAnim = function(el) {
    var head = el.getElementById('head'),
        torso = el.getElementById('torso'),
        shoulderRight = el.getElementById('shoulderRight'),
        shoulderLeft = el.getElementById('shoulderLeft'),
        armLeft = el.getElementById('armLeft'),
        upperArmLeft = el.getElementById('upperArmLeft'),
        foreArmLeft = el.getElementById('foreArmLeft'),
        handLeft = el.getElementById('handLeft'),
        mouth = el.getElementById('mouth');

    var pMouth = new TimelineMax({paused:true, repeat:-1, yoyo:true});
    pMouth.set(mouth, {transformOrigin:"50% 0%"})
          .to(mouth, .2, {scaleY:1.25, ease:Back.easeOut })
          .to(mouth, .2, {scaleY:0.8, scaleX:0.8, ease:Back.easeOut })
          .to(mouth, .2, {scaleY:1.5, scaleX:1, ease:Back.easeOut })
          .to(mouth, .2, {scaleY:0.8, scaleX:0.8, ease:Back.easeOut })
          .to(mouth, .4, {scaleY:1.25, ease:Back.easeOut });
    pMouth.play();

    TweenMax.to(head, .5, {rotationZ:-4, transformOrigin:"50% 100%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(torso, .5, {rotationZ:2, transformOrigin:"50% 20%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(upperArmLeft, .5, {rotationZ:10, transformOrigin:"100% 0%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(foreArmLeft, .5, {rotationZ:30, transformOrigin:"100% 0%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(handLeft, .5, {x:2, transformOrigin:"50% 50%", rotationZ:40, repeat:-1, ease:Back.easeOut, yoyo:true});

};
pharrellAnim(document.getElementById("pharrell"));


var drummerAnim = function(el) {
    var head = el.getElementById('head'),
        handLeft = el.getElementById('handLeftGroup'),
        handRight = el.getElementById('handRightGroup'),
        baseDrum = el.getElementById('baseDrum'),
        lowDrum = el.getElementById('lowDrum'),
        highHatTop = el.getElementById('highHatTop'),
        highHatBottom = el.getElementById('highHatBottom'),
        footRight = el.getElementById('footRight'),
        footLeft = el.getElementById('footLeft'),
        armRight = el.getElementById('armRight'),
        foreArmRight = el.getElementById('foreArmRight'),
        armLeft = el.getElementById('armLeft'),
        elbowLeft = el.getElementById('elbowLeft');

    var tlHead = new TimelineMax({paused:true, yoyo:true, repeat:-1});
    tlHead.set(head, {x:-18, y:10}) 
          .set(head, {transformOrigin:"50% 100%", x:1})
          .from(head, .25, {rotationZ:-15, ease:Cubic.easeIn})
          .to(head, .25, {rotationZ:15, ease:Cubic.easeOut});
    tlHead.play();
  
    TweenMax.from(head, .25, {y:-6, repeat:-1, yoyo:true, ease:Cubic.easeOut});
  
    // base drum and left foot/knee
    TweenMax.from(baseDrum, .5, {scale:1.05, transformOrigin:"50% 50%", ease:Cubic.easeOut, repeat:-1});
    TweenMax.to(footLeft, .5, {y:-3, ease:Cubic.easeOut, repeat:-1});
    // drummer left hand, elbow, high hat & right foot/knee
    TweenMax.to(armLeft, .25, {rotationZ:1, transformOrigin:"100% 20%", ease:Back.easeOut, repeat:-1});
    TweenMax.to(elbowLeft, .25, {rotationZ:-2, transformOrigin:"0% 50%", ease:Back.easeOut, repeat:-1});
    TweenMax.from(handLeft, .25, {rotationZ:20, transformOrigin:"10% 90%", ease:Back.easeOut, repeat:-1});
    TweenMax.from([highHatTop, highHatBottom], .25, {rotationZ:2, transformOrigin:"50% 50%", ease:Back.easeOut, repeat:-1});
    TweenMax.to(highHatTop, 1, {y:3, transformOrigin:"50% 50%", ease:Back.easeOut, repeat:-1, repeatDelay:1});
    TweenMax.to(footRight, 1, {y:-2, ease:Back.easeOut, repeat:-1, repeatDelay:1});
    // right hand, arm and snare
    TweenMax.from(armRight, 1, {y:2, transformOrigin:"0% 0%", ease:Back.easeOut, repeat:-1});
    TweenMax.from(foreArmRight, 1, {rotationZ:-2, transformOrigin:"100% 10%", ease:Back.easeOut, repeat:-1});
    TweenMax.from(handRight, 1, {rotationZ:-18, transformOrigin:"90% 90%", ease:Back.easeOut, repeat:-1});
    TweenMax.from(lowDrum, 1, {scale:1.05, transformOrigin:"50% 0%", ease:Cubic.easeOut, repeat:-1});
};
drummerAnim(document.getElementById("drummer"));

var nileAnim = function(el) {
    var head = el.getElementById('head'),
        torso = el.getElementById('torso'),
        shoulderRight = el.getElementById('shoulderRight'),
        shoulderLeft = el.getElementById('shoulderLeft'),
        handLeft = el.getElementById('handLeft'),
        armLeft = el.getElementById('armLeft'),
        guitar = el.getElementById('guitar'),
        armRight = el.getElementById('armRight'),
        handRight = el.getElementById('handRight');

    //Nile
    TweenMax.to(head, .5, {y:4, x:3, rotationZ:4, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true });
    TweenMax.to(armLeft, .25, {x:4, y:4, rotationZ:14, transformOrigin:"100% 0%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.from(handLeft, .1, {x:-4, y:6, rotationZ:45, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to([torso, guitar, handRight, armRight], .5, {x:-2, y:4, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to([torso, shoulderRight, shoulderLeft], .5, {y:4, repeat:-1, ease:Back.easeOut, yoyo:true});
    TweenMax.to(guitar, 1, {rotationZ:2, transformOrigin:"50% 50%", repeat:-1, ease:Back.easeOut, yoyo:true});
};
nileAnim( document.getElementById("nile") );