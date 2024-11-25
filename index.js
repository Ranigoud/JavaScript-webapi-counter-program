// console.log('Hello'):console display
// console.log('This my website')

// window.alert('This is an alert')
// window.alert('This is my first class JavaScript'):-wesite or browser display
/*document.getElementById("myH1").textContent='Hello';
document.getElementById("myP").textContent='This is my JavaScript class':documment/browser/webpage display*/
/*Variable:
1.VAR
        :(CHANGE IT VALUE REDEFIND)            any time chage the value declaration use var key word

 2.let:
        (ONCE DECLARE VARIABLE WITH LET KEYWORD CANNOT BE REDEFIND BUT CHANGE IT VALUE )  one time declaration using let and onther time use only value can use to change data

 3.const:
         (NITHER THE VALUE WILL BE CHANGE OR VARIABLE CAN BE REDEFIND)

/*example:
a="apple";varibal=value
console.log(a);*/
//var example:

//    var tanu="plying"
//            console.log(tanu); //declare many times

//    var tanu="redaing";
//          console.log(tanu);//variable any time change same value\
// ----------------------------------------------------------------------
//let exapmle:

    //   let school="govt";//only one time defind declare but it can value use to defind declaration
    //   console.log(school);

//   let school="private";
//   console.log(school);        //Error: SyntaxError: Identifier 'school' has already been declared

  //but only value declare to defind
    //   school="primary"
    //      console.log(school);

//   -----------------------------------------------------------------------------------
   //cont:example:

    //  const name="rani";//only one time declare fixed
    //     console.log(name);
                                   //Error: SyntaxError: Identifier 'name' has already been declared
    /*   const name="tanu";
         console.log(name);

          name="ravi";
         console.log(name); Error:TypeError: Assignment to constant variable.*/

// ---------------------------------------------------------------------------------------------------
/*Data types:
// String
   Number
  Boolean
   null
  undefined   ->Primary Data type(allready defind)
 //---------------  
  Array
  Object:    ->Complex data types*/

//   -------------------------------------------------------
// String:-
    //   var a="this is is a rani"
    //    console.log(a);
    //    -----------------------
//Number:
    //   var a="abc";
    // console.log(20); /*display 20*/

    // ----------------------------------
// Boolean :
    //   Boolean=true,false;
    //   test= 20 >50; 
    //   console.log(test); 
    //   -------------------
//   =>document.write:thsi is webpage command 

    //  document.write("This is JavaScript <br> <br>");//string data type with double quatation
    //  ---------
//Number:
    //   document.write(12345);//  with out double quatation
      //html tags displat:
    //   document.write("<h1> This is Heading Text</h1><br> <br>")
    //   -------------

//null:
//    let sampleView=null;
//    console.log(sampleView);
//    --------------------------
// undefind:
//   let w;
//   console.log(w);//undefind
//   -----------------------
// =>Complex data types or reference or user defind data types

/*Array:*/

//   let sample=["tanu" ,  55 , {name:"Rani"} ]
//  console.log(sample)
// // ------------------

//Objects:
//    let tv={
//     movie:"nani",
//     show:"naga"
//    }
//    console.log(tv);
//method:typeof(data type find out)
        //   console.log(Array.isArray(sample));//array or T F
// -------------------------------------------------------------------------------------------------------------------------------

/*OPERATORS:& eXPRESSIONS:
    =>OPERATORS:
            1.Arithametic OPERATORS
            2.Assignment OPERATORS
            3.Comparison OPERATORS
            4.Logical OPERATORS
        ----------------------------
            1.Arithmetic operators:
               1.Addition
               2.Substuction
               3.manyultiplication
               4.Division
               5.Remainder(modula)
               6.Increment
               7.Decrement
            ----------------------------*/
            /* 1.Addition:
                    var a=30
                    var b=20
                    document.write("Result:", a+b);*/
                /* 2.substruction:
                   var a=30
                   var b=40
                   document.write("Result:",a-b);*/
                /* 3.multiplication:
                      var a=5
                      var b=10
                      document.write("Resuly:",a*b);*/
                 /* 4.division:
                      var a=20
                      var b=5
                     document.write("Result:"+a/b) */ 
                  /*5.remainder %    
                      var a=20
                      var b=2
                      document.write("Result:",a%b) */
                  /*6.increment
                       var a=10
                       a++
                       var b=20
                       b++
                       document.write("Result:",a);*/
                /*  7.decrement
                    var a=10
                    a--
                    var b=20
                    b--
                    document.write("Result:",a) */  
// -----------------------------------------------------------------------------------------------------------------
/* Contion statements: 
                  1. if
                  2. if-else
                  3. if-else-if
                  4. switch
                  
                1.if):-
                  var name ="Renu";
                  let address="Hyderabad";
                  if(name=="Renu")
                  {
                    document.write("Shes is home town ",address);
                  }*/
                /*2.else if:-
                var game="cricket";
                let captain="Dhoni";
                var tennies="sania"
                if(game=="something"){
                    document.write("Match caption name:", captain);
                }
                else if(tennies=="snia"){
                document.write("correct");
                else{
                document.write("nothing is matching");
                }

                }*/
            /*   var a=10;
                  var b=20;
                  var c=30;
                 if(a==b){
                 document.write("a is equal to b");
                }
                else if(a>b){
                document.write("red color");
                  }
                  else {
                    document.write("all wrong");

                    }*/
            /*Logical operator:-
            !,&&,||
            &&: T T=T

            T T   =T
            F T   =F
            T F   =F
            F F   =F 
            
            ||:
            T T =T
            F F =F
            T F =T
            F T =T*/
           /* &&:
            var a=10;
            var b=20;
            var c=30;
            if(a==b && c>a) {
                document.write("write ans");
            } else {
                document.write("wrong answer");
            }*/
           /*||
                var a=10;
                var b=20;
                var c=30;
                if((a==b) ||(a<b))
                    {
                    document.write(" b is big");
                }*/
            //    ---------------------------------------------------------------------------
//CONDITIONS:
              /*lOGICAL OPERATOR=TERNARY OPERATOR:

              ----------------------------------------------------
              CONDTION=TRUE?"TRUE STATEMENT":"DEFAULT STATEMENT";
              ---------------------------------------------------- 
            document.write(  
                2+3==5?"TRUE ANS":"WRONG ANS"    
            )*/
           /*var x=10;
           var y=20;
           x<y?document.write("T"):document.write("F");*/
//  ---------------------------------------------------------------------------------------------
/* Dialog Boxes:  
         1.alert()
         2. prompt()
         3.confirm()*/
   // 1.  alert("This is pop up box alert") ;//first pop next html  no need user information  

        //  -----------------------------------------------------------------
    // 2. prompt("Please enetr your name:"):first html (it need a user information after that update the html data page
    
    //  ----------------------------------------------------------------------------
    
    /*3.confirm:-(conformation information taken from user)
         confirm("Are you sure");*/
         /*var woman=confirm("Are you woman")
         if(woman){
            let name=prompt("please enter your name")
            document.write("Hello  madam."+name+"Welcome to my page");
         }
         else{
            let name=prompt("please eneter name")
            document.write("Hello Mr"+name+"welcome to my page");
         }*/
// ---------------------------------------------------------------------------------------------------------------------------------------------------
//TYPE CONVERSION:       
                //    var a="rani";
                //    var b=26;
                //    document.write(typeof b) 
            /*    var c=parseInt(b)
             document.write(typeof c)*/
            /*var x=String(b)
            document.write(typeof x)*/
 //SWITCH/SWITCH CASE STATEMENT:
          /*SYNTAX:  switch(expression){
            case vlue1.
                        statement
                       break;(print)
            case value2.
                        statement
                  break;
              case value3.
                           statement
                   break;
              default: 
                        default statement
                  break;                              
          } */
         //example:
                   /*switch(true){
                    case 10>30:
                        myAns = "F"

                    break ;
                    case 30>50:
                          myAns ="fl"
                    break;
                    case 30<50:
                         myAns="f"
                    break;
                    case 40==80:
                        myAns="t"
                    break;

                    default:
                        myAns ="write"
                    break;
                   } 
                   document.write(myAns) ;  */
    //Exapmle 2:
    /*let Name = prompt("Enter Your Name");
    let Marks = prompt("Enter Your marks");
    
    switch(true){
        case Marks>90 && Marks<=100:
            result="You are the Topper"
            break;
            case Marks>65 && Marks<=90:
                result="Your are the first class"
                break;
                case Marks >65 && Marks<=45:
                    result="Your are the second class"
                    break;
                    case Marks>40 && Marks<=65:
                        result="your the third class"
                        break;
                        case Marks>35 && Marks<=40:
                            result="your are pass"
                            break;
                            case Marks<35:
                                result="Sorry you are the fail"
                                break;
                    default:
                        result="Enter your marks"
                        break
    }
    document.write("Hello" + Name + "<h2>" + result+" </h2>");*/
    // ------------------------------------------------------------------------------------
    //Function:most important
        /*syntax:   function goodStart(){
                    document.write("Hello World");
                }
                goodStart();*/
             /*function goodStart(){
                console.log("Hello Word");
             } 
             goodStart();  */
//  -----------------------------------------------------------------
/*Scopes:3
        1.globle Scopes
        2.function Scopes
        3.block  Scopes */
    /* 1.globle Scopes:any where use in globle scopes
        var arf ="red";
        let brf ="block";
        const crf ="green";
        function alpha(){
            document.write(arf+"<br>")
            document.write(brf+"<br>")
            document.write(crf+"<br>")
        }
        alpha()*/
    /*  2.Function SCope:inside variabe and inside only acees variable 
     function fruit(){
        var x=100;
        document.write(x);
     } 
     fruit(); */
/*   3.Block scope:inside block only variabl access (if block not outer side)var key word is inside block and function scope also access data
        function sports(){
            if(10<20){
                let cricater="virat";
                document.write(cricater);
            }
            //document.write(cricater);//not access outside block
        } 
        sports();*/
    // var special in block scope:inside scope and inside function alsso access
       
       /* function fruite(){
            if(10<20){
            var tennies="sannia";
        }
        document.write(tennies);
    }
    fruite();*/
    // ---------------------------------------------------------------------------------
    /* FUNCTION WIT RETURN VALUE:-
             1.function expression
             2.anonymouse function
             3.function with parameterss return values*/
        /* 1.function expression:variable assinging to function is called function expression
           var a=function apple(){
             document.write("apple is red");
           }
          a();*/
    /*   2.ANonymouse function:with out  function name
      var b=function(){
        document.write("This is anonymouse function/with out function name");
      }
      b();*/
    /*3.function with parameterss return values:-

       function score(a,b){
        return a+b +"<br>"
       }
       document.write(score(10,20))
       document.write(score(30,40))*/
    /* example:2
      var userName=prompt("Please enter your name")
    function guest(myFriend){
        return document.write("Hello Welcome"+myFriend);
    }
    guest(userName);*/
// ----------------------------------------------------------------------------------------------
/*Methods:(dot notation .methodname)
       1.Array methods[]
       2.String methods(" ")
       3.Object methods{ }  
        example: let collection=["Rani",105,true{name="Ram"}]*/
     /*1.push():adds 1 or more elements to the end of the an array and return
     the new length of array   
        let sports=["cricate" ,"football"]

          
          sports.push("valiball" ,26 +"<br>");
       document.write(sports)
       document.write(sports.length+"<br>")*/
    //    ----------------------------------------
    /* 2.pop()method:opposite to Push()method remove the last element and return reamining elemnt
    let fruits=["Rani",26,"Hyderbad"]
       let result=fruits.pop()

    document.write(fruits+"<br>")
    document.write("deleted by pop method element:"+result)*/
    // ------------------------------------------------------------
    /* 3.shift():opposit to pop method remove the first element
        
         let states=["d", "t","a"]
         let newStates=states.shift()
         document.write(states+"<br>");
         document.write(newStates.length+"<br>")//lentgh
         document.write(newStates+"<br>")//deletd element*/
        //  ----------------------------------------------------------
    /*4.unshift():add one or more elements  begining an array and returnd the new array length
       let fruits=["ban","org","app"]

        let newFruits=fruits.unshift("graps","leman")
        document.write(fruits+"<br>")
        document.write(fruits.length)*/
        // -----------------------------------------
    /*5.concat():combine two or more arrays and return new array  
    
    
       let num=[1,2,3,4,5]
       let two=[6,7,8,9,10]
      
       let newTwo=num.concat(two);
       document.write(newTwo);
       let thd=[11,12,13,14,15]
       let newThd=newTwo.concat(thd)
       document.write(newThd)*/
    //    -------------------------------------
/* 6.join():creats a new string by concatining all the elements of an array and returns 
   a string by a specified separator.
      var team=[10,20,30,"Rani","Ravi","Ram"]
      var myTeam=team.join("-");
      document.write(myTeam);*/
/*7.slice():returns a shallow copy of a portion of an array into a new array    
        let students=["rani","Radha","ram",10,20,30,40]
        let myStudents=students.slice(0,5)/(index value first,postion valu next)
        document.write(myStudents)

        console.log(students)*/
        // ---------------------------------------------
/*8.splice():Change the content of an array by removing,replacing,adding elements
    Removing elements:
            let myNumbers=[0,1,2,3,4,5,6,7,8]
              let myNewNumbers=myNumbers.splice(0,5)
          document.write(myNumbers+"<br>") //reamining elements print
         document.write(myNewNumbers); //remove elements print */  
        //  -------------------------------------
    /* replacing:      
      let myNumbers=[0,1,2,3,4,5,6,7,8]

      let myNewNumbers=myNumbers.splice(0,4,"something");//0start to end 4
      document.write(myNumbers+"<br>") //replacing elenments
      document.write(myNewNumbers) //removing values*/
    /*replacing:
    let myNumbers=[0,1,2,3,4,5,6,7,8]

    let myNewNumbers=myNumbers.splice(4,1,"nothing");//4place only 1
    document.write(myNumbers+"<br>") //replacing elenments
    document.write(myNewNumbers) //removing values*/
    //  ---------------------------------------
    /*three places:
    let myNumbers=[0,1,2,3,4,5,6,7,8]

    let myNewNumbers=myNumbers.splice(4,3,"nothing");//4place nudi 5,6 three places
    document.write(myNumbers+"<br>") //replacing elenments
    document.write(myNewNumbers) //removing values*/
    //  -------------------------------------------
 /*adding:
        let myNumbers=[0,1,2,3,4,5,6,7,8]

        let myNewNumbers=myNumbers.splice(2,0,"star");//2place mundu
        document.write(myNumbers+"<br>") //replacing elenments
        document.write(myNewNumbers) //removing values*/
// --------------------------------------------------------------------
// 9.indexOf():
//               Returns the first index at which a given element can be found in an Array  
  /* let students=["a","b","c","d"]
   document.write(students.indexOf("c"))  //present value index postion dispaly
    
    document.write(students.indexOf("e"))//unknown value is -1 display
    var newStudents=students.indexOf("s")
    if(newStudents===-1){//new name enter ened
        students.push("s")
    }
    document.write(students);*/
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------
/*10.forEach():executive a provided function once for each array Element(travel on all elements operations once) 


{ *CALL BACK FUNCTION:A function calld has a parameter inside function or method called are call back function}


      let score=[1,2,3,4,5,6]
      let students=["a","b","c","d"]
                         //Anynomouse function
      students.forEach(function(item,index){    //parameter inside callback function
        document.write(index + "."+ item +"<br>")
      })

      score.forEach(function(apple){
        document.write(apple*2+"<br>")
      })*/
    //  --------------------------------------------

// MULTI DIMENSIONAL ARRAY: simply nested array(array inside one or more arrays called) 
    /* EX:TWO DIMENSINOL ARRAY
    let students=["a","b","c","d"]

     let marks=[
         [1,2,3,4],//o index  postion=1
         [5,6,7,8,9], //1 index postion=2
         [10,11,12,13]  //2 index postion=3
        ]
    document.write(students.indexOf("c")+"<br>");
    document.write(students[3]+"<br>");

    document.write(marks[0][3])*/
    // ------------------------------------------
    /*three dimensional array:
    let marks=[
          [
            ["a","b","c","d"]
          ],
        [1,2,3,4],//o index  postion=1
        [5,6,7,8,9], //1 index postion=2
        [10,11,12,13]  //2 index postion=3
       ]
     document.write(marks[0][0][3]);*/
    //  ------------------------------------------------------------------------------------------------------------------


    /* STRING METHODS:
    1.Split();
    2.trim();
    3.chartAt();*/

    /*1.split():spread letter
         let sample="This is a string method"
         document.write(sample.split(" "))

         console.log(sample.split(" "))*/
    /*2.trim:
    
    let name="  ramesh  " 
    document.write(name)  
    console.log(name.trim())  
    console.log(name)*/
/*   3.chartAt: 
 let sample="Tanvika goud" 
  document.write(sample.charAt(8))
  console.log(sample.charAt(8))*/
//   ----------------------------------------------------------------------------------------------------
/*LOOPS:
   1.FOR LOOP
   2.WHILE LOOP
   3.DO-WHILE
   4.forEach
   5.FOR-In*/
/*1.for loop:
   ex:Increment
        for(var a=0; a<=10;a++)
        {
            document.write(a+")"+"rani"+"<br>")
        }*/

    /*   eg:decrement
     for(var a=10; a>=1; a--) {
        document.write(a+")"+"RAVI"+"<br>");
     }*/

    // -------------------------------------------------------------------

/*2.while loop: unlimited   
   let x=0
   while(x <10) {
    document.write("Hello"+"<br>")
    x++
   }  */
//   -------------------------------------------------------------

/* 3.do-while loop:
  let y=0;

  do{
    document.write("this do-while out put")
    y++
  }while(y>20)*///condition wrong but once out put is get
//  -------------------------------------------------------------------------------------------------------------------------------- 
/*PRATIAL LOOPS CONCEPT:

    var amount=100;
    var days=30;
    var interest=2

    for(let i=1;i<=days;i++){ //eni days end avuthe uni
        if(i%4===0){//4th day nudi intrest increase
            amount+=interest//amount ki interest add avali
        }
        document.write("Your amount for"+i+"th day"+amount+"<br>")
    }*/
//    ----------------------------------------
   /*var amount=1000000;
   var days=30;
   var interest=1.80

   for(let i=1; i<=days; i++){
    if(i%1===0){
        amount+=interest
    }
    document.write("your amountfor "+i+"th days"+amount+"<br>")
   }*/
//   -----------------------------------------------------------------------------
// DOM:-DOMIS A MANUPULATE USING METHODS AND PROPERTIES
   /*1)a.getElementById():innerText=>

        const a =document.getElementById("stone");    //in html page target the partical id
 
           a.innerText="Home";*/      //document.getElementById method using :innerText(id is change name in js)
    //    -------------------------------------------------------------------------

  /*1)b.getElementById():innerHTML=>

        const a=document.getElementById("stone");   //in html page target the partical id

       a.innerHTML="<h1>New title</h1>" //getElementById() using innerHTML HTML page code is as it is same but change in js
       console.log(a);*/
// ---------------------------------------------------------------
  
/*1)c.getElementById():textContenet=>
     
     const a=document.getElementById("stone")   //in html page target the partical id
       
     a.textContent="sales company " */          //getelementbyid method using textCotent properties html page is as it is same but js code is same
    // -------------------------------------------------------------
    /* 2)A.getElementByClassName():textContent=>

          const my=document.getElementsByClassName("name")[0]  //in html page target only particalar class neme

              my.textContent="newName";    //change only text
              console.log(my)*/
    //  --------------------------------------------------------------
    /*2)b.getElementByClassName():innerHTML:   //cchange  ONLY HTML TAGES
       const budget=document.getElementsByClassName("ab")[0]  //print the position also

       budget.innerHTML="<h6> thsis is h6 tag</h6>"*/

    //   --------------------------------------------------

    /*2)c. getElementByClassName():innerText
          const budget=document.getElementByClassName("cd")[0]
           budget.innerText="hello";*/ //just change text
// ----------------------------------------------------------
/*3a.getElementByTagName():textContent: // This target only TagNames
   
      const tagtest=document.getElementsByTagName("p")[0]
   
           tagtest.textContent="This is a paragraph"
            console.log(tagtest)*/
        // --------    -------------------------------------------
 /*3)b. getElementsByTagName:innerHTML=>
         const tagtest=document.getElementsByTagName("p")[0]
          
           tagtest.innerHTML="<h1>This is paragraph</h1>"
           console.log(tagtest)*/
        //    ----------------------------------
/* 4).queryselector:(only use css code)only one 
     const newStone=document.querySelector("#stone") ("".cd")("div")
       newStone.textContent="Rani" */     
    //   -----------------------------------
  /*5. querySelectorAll:is also all once take ex:for
     const newP=document.querySelectorAll("p") 
     for(let x=0; x<newP.length;x++){
        newP[x].textContent="my paragraph"
     }*/

        // -----------------------------------------------
//  DIFFERENCE BEETWEN innerText and textContent  
    
/*innerText:hidden css style ONCONSOLE   
const newP=document.querySelector("p")
     
        console.log(newP.innerText);*/
    //    -------------------------------------
    /*2.innerHTML:SHOW CSS STYLE ON CONSOLE 
         
    const newP=document.querySelector("p")
     
    console.log(newP.textContent);*/
/* =>ATTRIBUTES:it checks the attributes show in console only not webpage

   const targetingAtt=document.querySelector("nav").attributes.href.value
    
         console.log(targetingAtt)*/
         
        //  -----------------------------------------------
/*6 .SETATTRIBUTES:SET THE ATTRIBUTE AND ALUE(STYLE=COLOR;RED)  

  const targetul=document.querySelector("ul")

       targetul.setAttribute("style" , "border:5px solid block")*/
    //   -------------------------------------------------
    /*const targeta=document.querySelector('.ab')

    targeta.setAttribute('style', 'background-color:green')*/
    // -------------------------------------------------------------

    /*const targetRemove = document.querySelector("p")

        targetRemove.removeAttribute("p")*/
//css in js:
    //  const targetp = document.querySelector("p").style.backgroundColor="red"      
// Event:L
// const darkTheme = function() {
//     document.querySelector("body").style.backgroundColor = "black"
//     document.querySelector(".dark-theme").textContent = "Light Theme"
//     document.querySelector("header").style.backgroundColor = "#2E282A"
//     document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
// }

// const lightTheme = function() {
//     document.querySelector("body").style.backgroundColor = "white"
//     document.querySelector(".dark-theme").textContent = "Dark Theme"
//     document.querySelector("header").style.backgroundColor = "#F86624"
//     document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

// }

// function eleHover(element) {
//     element.style.backgroundColor = "yellow";
// }

// function eleOut(item) {
//     item.style.backgroundColor = "#DEE7E7"
// }

// const changeCompany = function() {
//     document.querySelector("#company").textContent = "Sales Force";
// };

// const normal = function() {
//     document.querySelector("#company").textContent = "Company"
// }
// const keyPressed = function() {
//     document.querySelector("body").style.backgroundColor = "white"
// }

// const keyDown = function() {
//     document.querySelector("body").style.backgroundColor = "red"
// }
// DATE()
// const toDay= new Date() 
//  document.write(toDay)
//  document.write(toDay.getDate())

// document.write(toDay.getMonth()+1)

// document.write(toDay.getFullYear())
//event-listeners:

/*EVNT EXAMPLE:-event in html code on fuction name takes tag,class or id

const darkThem=function(){
    document.querySelector("body").style.backgroundColor="gray"
    document.querySelector(".form-c").style.backgroundColor="pink"
    document.querySelector(".dark-them").textContent="light-them"
    document.querySelector(".container").style.backgroundColor="yellow"

} 
const lightThem=function(){
    document.querySelector("body").style.backgroundColor="yellow"
    document.querySelector(".dark-them").style.backgroundColor="Dark-Them"
    document.querySelector(".container").style.backgroundColor="green"
    document.querySelector(".form-c").style.backgroundColor="red"
}
function eleHover(element){
    element.style.backgroundColor="orange"
}
function eleOut(element){
    element.style.backgroundColor="green"
}
const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}*/
// ---------------------------------------------------
/*EVENT LISTENER:
// 1.FIRST STEP:-
    
      getElementById("exampleId").onclock=functionName

          function functionName(){
            exampleId.style.backgroundColor="red"
          }
            --------------------------------------------
2.SECOND STEP:-addEventListener() also called event handler function
      ex:
          getElementById("exampleId").addEventListener('click',functionName)
           {
             exampleId.style.backgroundColor="red"
            } *///even handeler function
            //  -----------------------------------------------------
           
//=>mouseHover and mouseOut using addEventListener:
/*mouseover:

document.getElementById("loginsubmit").addEventListener( 'mouseover', function() {
    this.style.background = "red"
});*/
// -----------------------------------------------------------
/*mouseout
document.getElementById("loginsubmit").addEventListener('mouseout',function() {
    this.style.background ="green"
});*/
// -------------------------------------------------
/*REMOVE-addEventListener:-
const NavBorder=document.getElementById("add-border")
   NavBorder.addEventListener('click',addingborder)
    function addingborder(){
        document.querySelector('header').style.border = "5px solid black"

    }
    if(10<20){
        NavBorder.removeEventListener('click',addingborder)
    }*/
// -----------------------------------------------------------
// FORM EVENTS:
/*submit:event
const mainForm=document.getElementById("myForm")
const username=document.getElementById("nameInput")
const Inputname=document.getElementById("name")


mainForm.addEventListener('click',function(event){
    event.preventDefault()


    const myInput=username.value
    Inputname.textContent=myInput
    mainForm.reset()//reset event
})*/
// -------------------------------------------------------------
/*focus event:-using a target
      const userInput=document.getElementById("nameInput")

      userInput.addEventListener('focus', function(event){
        // console.log(event.target)
        event.target.style.background='green'
      })*/
    //   ----------------------------------------------------
    /*blur event:-
       userInput.addEventListener("blur",function(event){
        event.target.style.background=' '
      })*/
    //  -------------------------------------------------------
/*CHANGE EVENT:
         
    const myNewColors=document.getElementById("myColors")
   const myNewBox=document.getElementById("box")

   myNewColors.addEventListener('change',function(){

    myNewBox.style.background=myNewColors.value
    myNewBox.textContent=myNewcolors.value
   })*/
//   ------------------------------------------------
  /*input event:-
   
  const mainForm=document.getElementById("myForm")
  const username=document.getElementById("nameInput")
  const inputname=document.getElementById("name")


  mainForm.addEventListener('input',function(event){
    event.preventDefault()

    const myUserName=username.value

      inputname.textContent=myUserName
})*/
// -----------------------------------------------
/*CLASSLIST:
add
remove
Toggle
CONTAINS
REPLACE*/

/*ADD EXAMPLE:
               const openNav=document.getElementById("open")
               const closeNav=document.getElementById("close")

               const sideNav=document.querySelector(".sidebar")
                      //close sidebar
               closeNav.addEventListener('click',closeSideNavBar)

               function closeSideNavBar(){
                sideNav.classList.add("apple")
                document.querySelector(".apple").style.display='none'
               }
                //open side bar
               -------------------------------------
               openNav.addEventListener('click',openSideNavBar)

               function openSideNavBar(){
                sideNav.style.display='block'
               }*/
// ----------------------------------------------------    

/*Remove classList:
                      dommanipulation:
.html:- same target sidebar class

css:- also same nav sidebar 

 .js:-  const openNav=document.getElementById("open")
        const closeNav=document.getElementById("close")
   
     const sideNav=document.querySelector(".sidebar")
     
     closeNav.addEventListener('click',closeSideNavBar)

     function closeSideNavBar(){
        sideNav.classList.remove("sidebar")  //remove classlist:
        
     }

     openNav.addEventListener('click',openSideNavBar)

        function openSideNavBar(){
            sideNav.style.display='block'
        }*/
// -----------------------------------------------------------------       
 /*classList Toggle method: SHOW AND HIDE RESPONCE GETTING
 =>HTML: IN ONE OPEN BUTTON IS REMOVED
          <button id="open">Openside</button>
  =>css: in js one class is taken mango class so 
  .mango{
    display:none;
  } 
      
        const closeNav=document.getElementById("close")
         
           const sideNav=document.querySelector(".sidebar")//use querySelector for a class


           closeNav.addEventListener('click', closeSideNavBar)

                function closeSideNavBar(){
                    sideNav.classList.toggle("mango")
                }*/
//  -----------------------------------------
/*date get() and set()  

   get():-
   const toDay=new Date()
      document.write(toDay.getSeconds())*/
    //   -------------------------------------------
    /*set():-
    const toDay=new Date()
    toDay.setFullYear(1995)
    document.write(toDay)*/
// ----------------------------------------------------------
/* MATH METHOD():-
    const calculation=Math.random()*4
    document.write(calculation)*/
// ---------------------------------

// object:real world entity collection of properties,it consits of key value paires

      /*Array:array it allows multple data stored in single variable
Array=[1,"rani",true]
const sampleArray=[1,"rani",true]
document.write(sampleArray[2])*/

/*const captl={
    ind:"new Delhi",
    tel:"Hyd",
    mah:"mob",
    locti:function(){
        return "i live"+this.tel
    }
}*/
// document.write(captl.locti())//using parathasyss
/*=> modifying:     using previous variable .property with = operator update
      
captl.mah="Bob"
      document.write(captl.mah)*/
     
/*  =>enter new data:     
    
     captl.area="Ameerpet"
       document.write(captl.area)*/
/* =>Dynamic object creations:   

const fruits= new Object()

fruits.apple="Red"
fruits.mango="yellow"
//    document.write(fruits)
   console.log(fruits)
   document.write(fruits.apple + fruits.mango)*/
  
   /*const user = {//nested object
    username: "john_doe",
    password: "secure123",
    profile: {
        firstName: "John",
        lastName: "Doe",
        age: 30
    }
};
document.write(user.profile.firstName)*/
/*constructor with object function:-
function Person(name, age) {
    this.name = name;
    this.age = age;
}


const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // "Alice"
console.log(person2.age); // 30*/

/* console.log("hello");
 alert("Hai this is defer") 
 let ele=document.querySelector('h1') 
 alert(ele.innerText) */
 /*stop watch:         
let milliseconds=0,seconds=0,minutes=0,hrs=0;
let timeshow=document.getElementById("timeshow");
let timeref;


document.getElementById("start").onclick=function(){
    timeref=setInterval(updateTime,10)
}

function updateTime(){
    milliseconds=milliseconds+10;
    if(milliseconds==1000){
        milliseconds=milliseconds+1;
        milliseconds=0; // 0 to intialize
        if(seconds==60){
            seconds=seconds+1;
            seconds=0;   // 0 intialize
            if(minutes==60){
                hrs=hrs+1;                       
                minutes=0; //0 to intialize
            }
        }

    }

//for update 0 start digit in one digit to
let h,m,s,ms;
if(hrs<10){
    h='0'+hrs;
}
else{
    h=hrs;
}
if(seconds<10){
    s='0'+seconds;
}
else{
    s=seconds;    
}
if(minutes<10){
    m='0'+minutes;

}
else{
    m=minutes; 
}
if(milliseconds<10){
    ms='0'+milliseconds;                                                                                                                                                                                                                                    
}
else if(milliseconds<100){
    ms='00'+milliseconds;
}
else{
    ms=milliseconds;
}

timeshow.innerHTML=`${h}:${m}:${s}:${ms}`

}
    

document.getElementById("pause").onclick=function(){
    clearInterval(timeref)

}
document.getElementById("reset").onclick=function(){
    milliseconds=0;
    seconds=0;
    minutes=0;
    hrs=0;
    timeshow.innerHTML="00 : 00 : 00: 00";
}*/
 //Background color change:

 /* 1st way: colorele=document.getElementById("color")
 way:  colorele.oninput=function(){
    // console.log(this.value)
    document.body.style.background=this.value
    console.log(this.value)

  }*/
 /* 2nd way:colorele=document.getElementById("color")

 way: colorele.addEventListener('input',function(){
    document.body.style.background=this.value
})
/* 3rd way:
colorele=document.getElementById("color")
   function bgcChange(){
    let s="0123456789abcdef";
    let color="#";
     
      
    for(i=0;i<6;i++){
        let index=Math.floor(Math.random()*16)
        color=color+s[index]
    }
    document.body.style.background=color;
   }
   setInterval(bgcChange,1000);*/
//    -----------------------------------
/*    Calculator cration js:
  let result=document.getElementById("result");
  let buttons=document.getElementsByTagName("button")


  for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
          let input=this.innerText;
          updateDisplay(input)
    }
  }
     

  function updateDisplay(input){
    let currentDisplay=result.innerText;
    if(currentDisplay=='0'){//okavela current display '0' unte
        if(input!='Ac'&&input!='DEL'&&input!='='){//user click chesin input ac,del,=  kakund vere edi una displaylo '0'remove cheyali
            result.innerText=" ";//remove / empty
            result.innerText=input; //next step user click input pettamu
    }

}
  else{
   if(input=="DEL")
   {                                         //startindex, endindexvalue
    result.innerText=currentDisplay.substring(0,currentDisplay.length-1)//user input lo last posion sub string exclude chestundi
    //   if(result.innerText=" "){}
    //   result.innerText="0";
   //}
   }
  
  if(input=="AC"){
    result.innerText="0";
  }
  if(input!="AC"&&input!="DEL"&&input!="="){//user ac,del,=, kakund input values iste add avali
    result.innerText+=input;//just add not addition
  }
  if(input=="="){
    let display=result.innerText
    result.innerText=eval(display)
  }
}
}*/
// --------------------------------------------------------------------------
/*FILE READER API:
  let fileInput=document.querySelector("input");
  let outputFile=document.querySelector(".content");
      

  fileInput.addEventListener("change", ()=>{
    //    console.dir(fileInput)
        let file=fileInput.files[0]
        let fr=new FileReader();//file reader method
        fr.readAsDataURL(file);//user file text file/url image
        fr.addEventListener('load',()=>{
                         //textContent.innerHTML,textHTML(file reader  (object)lo  property result )
            outputFile.src=fr.result;

        })

  });*/
//   ------------------------------------------------------
//COUNTER PROGRAM INCREASE AND DECREASE:
   
   let count=0;

     document.getElementById("decrease").onclick=function(){
        count-=1;
        document.getElementById("countlabel").innerHTML=count;

     }

     document.getElementById("reset").onclick=function(){
        
        count=0;
        document.getElementById("countlabel").innerHTML=count;
     }

     document.getElementById("increase").onclick=function(){
        count+=1;
        document.getElementById("countlabel").innerHTML=count;
        
     }
     









