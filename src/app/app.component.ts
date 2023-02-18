import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

printNumber : number = 12;
fullName : string ="Oussema Sendi";

  title = 'myFirstApp';
  myInfo =false;
  myName : String = "Boubaker";
  Myage : any = 45;
  Datainfo : boolean = true;


  someText:string="You can change the world :D !";

  great (Name:String ){
    console.log("Hello yaa : "+Name.toLocaleUpperCase());
  }
    // costumers = [{value:'Ebony'},{value:'Chiho'}];
    costumersArray : Customer[]=[
      {
        name : 'SENDI',
        prenom : 'Safwen',
        Age : 37
      },
      {
        name : 'SENDI',
        prenom : 'Hatem',
        Age : 36
      },
      {
        name : 'SENDI',
        prenom : 'Oussema',
        Age : 30
      }
    ];

    PersonObject = 
    {
      name : 'SENDI',
      prenom : 'Boubaker',
      Age : 27
    }

    sum(n1 : number,n2 : number){
    return n1+n2;  
    }
    OnClick() {
      prompt("your just clicked");
    }

}
class Customer {
  name : string="";
  prenom : string="";
  Age : number=0;
}
 