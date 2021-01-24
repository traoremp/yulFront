import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarService } from 'src/app/service/avatar.service';
import { ProgressWebsocketService } from 'src/app/service/progress.websocket.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  private obs: any;

  constructor(private router: ActivatedRoute, private progressWebsocketService: ProgressWebsocketService, private mapService: AvatarService) 
  { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

}
