var points = 0;
let current = 0;
let now = 0;
var questions = [
    {
        question : "Mennyi 1+1?",
        ansver1 : "1",
        ansver2 : "2",
        ansver3 : "3",
        ansver4 : "4",
        solution : 2
    },{
        question : "Mi a legmagasabb hegy?",
        ansver1 : "Kékes tető",
        ansver2 : "Mount Kosciuszko",
        ansver3 : "Aconcagua",
        ansver4 : "Mount. Everest",
        solution : 4
    },{
        question : "Hol található Szarivon?",
        ansver1 : "Észak-Korea",
        ansver2 : "Kína",
        ansver3 : "Japán",
        ansver4 : "Dél-Korea",
        solution : 1 
    },{
        question : "Melyik női együttes?",
        ansver1 : "BTS",
        ansver2 : "Exo",
        ansver3 : "Twice",
        ansver4 : "LunaFly",
        solution : 3
    },{
        question : "Melyik elemnek áll 2 betűből a vegyjegye?",
        ansver1 : "Szén",
        ansver2 : "Szelén",
        ansver3 : "Foszfor",
        ansver4 : "Nitrogén",
        solution : 2
    },{
        question : "A föld hányadik bolygó a Naptól?",
        ansver1 : "1",
        ansver2 : "3",
        ansver3 : "4",
        ansver4 : "Nincs ilyen nevű bolygó",
        solution : 4,
    },{
        question : "Melyik a legnagyobb óceán?",
        ansver1 : "Csendes-óceán",
        ansver2 : "Atlanti-óceán",
        ansver3 : "Indiai-óceán",
        ansver4 : "Arktikus-óceán",
        solution : 1
    },{
        question : "Mi a Föld legmagasabb pontja?",
        ansver1 : "8850m",
        ansver2 : "8847m",
        ansver3 : "8849m",
        ansver4 : "8848m",
        solution : 4
    },{
        question : "Mi a Föld legalacsonyabb pontja?",
        ansver1 : "-8003m",
        ansver2 : "-13087m",
        ansver3 : "-11034m",
        ansver4 : "-22034m",
        solution : 3
    },{
        question : "Melyik ásvány a legdrágább?",
        ansver1 : "Gyémánt",
        ansver2 : "Kalifornium",
        ansver3 : "Arany",
        ansver4 : "Ezüst",
        solution : 2
    },{
        question : "Melyik a legkeményebb ásvány?",
        ansver1 : "Korund",
        ansver2 : "Gyémánt",
        ansver3 : "Obszidiánt",
        ansver4 : "Lonsdaleit",
        solution : 4
    },{
        question : "Melyik tengeri állat a legveszélyesebb?",
        ansver1 : "Dobozmedúza",
        ansver2 : "Kőhal",
        ansver3 : "Tűzhal",
        ansver4 : "Kékgyűrűs polip",
        solution : 1
    },{
        question : "Melyik kígyónak nem mérgező a harapása?",
        ansver1 : "Fekete mamba",
        ansver2 : "Oxyuranus",
        ansver3 : "Kockás sikló",
        ansver4 : "Királykobra",
        solution : 3
    },{
        question : "Melyik középkori csata során használták először jelentős mennyiségben a puskaport Európában?",
        ansver1 : "Poitiers-i csata",
        ansver2 : "Agincourt-i csata",
        ansver3 : "Crécy-i csata",
        ansver4 : "Tours-i csata",
        solution : 3
    },{
        question : "Melyik ókori civilizáció hozta létre a világ első ismert írott törvénykönyvét?",
        ansver1 : "Babiloniak",
        ansver2 : "Egyiptomiak",
        ansver3 : "Görögök",
        ansver4 : "Summérok",
        solution : 4
    }
]

function Start()
{
    Sign(questions[current]);
    document.getElementById('total').innerText = (now) + '/' + questions.length;
    
} 
function Sign(question){
    document.getElementById('question').innerText = question.question;
    document.getElementById('ansver1').innerText = question.ansver1;
    document.getElementById('ansver2').innerText = question.ansver2;
    document.getElementById('ansver3').innerText = question.ansver3;
    document.getElementById('ansver4').innerText = question.ansver4;
}

function Ansver(choice){
    if(current == questions.length){
        alert("Az ön pontszáma:" + points)
    }
    else if (questions[current].solution == choice){
        points += 1
        current++
        now++
        document.getElementById('total').innerText = (now ) + '/' + questions.length;
        Sign(questions[current])
    }
    else if(questions[current].solution != choice){
        current++
        now++
        document.getElementById('total').innerText = (now ) + '/' + questions.length;
        Sign(questions[current])
    }
}