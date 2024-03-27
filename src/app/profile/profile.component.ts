import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 public Name:string="Anila";
 public Age:number=23;
 public Email:string="anila@gmail.com";
 public Course:string="Maths";
 public Status:string="Active";
 public profileURL="https://static.vecteezy.com/system/resources/previews/024/029/971/original/kids-reading-clipart-transparent-background-free-png.png"
 public myClass ='myclass';
 public msg ='error';
 public clickcount =0;
 public text ='Enter the text';
 public value ='School Name'


 ngOnInit(): void {
     
 }
 
  addStudent=()=>{
    alert("Student added successfully")
  }
  onSave=()=>{
    this.clickcount++;

    if(this.clickcount==4){
      alert('Student Data Saved');
      this.clickcount=0;
    }

    
  }
  keyup(value: string){
    this.text =value;
  }

}
