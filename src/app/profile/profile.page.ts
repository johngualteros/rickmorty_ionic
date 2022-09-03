import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id: number = null;
  character;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.getOneCharacter();
  }
  getOneCharacter(){
    this.http.get<any>(`https://rickandmortyapi.com/api/character/${this.id}`).subscribe(res => {
      this.character = res;
      console.log(this.character);
    });
  }
}
