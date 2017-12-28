import { Player } from './../../models/player/player.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerListService } from '../../services/player-list/player-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-player',
  templateUrl: 'edit-player.html',
})
export class EditPlayerPage {
player: Player;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private playerlist: PlayerListService, 
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.player = this.navParams.get('player');
  }


  savePlayer(player: Player){
this.playerlist.editPlayer(player)
    .then(() => {
      this.toast.show(`${player.firstname} ${player.lastname} edited !`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removePlayer(player: Player){
    this.playerlist.removePlayer(player)
    .then(() => {
      this.toast.show(`${player.firstname} ${player.lastname} deleted !`);
      this.navCtrl.setRoot('HomePage');
    });
  }
}
