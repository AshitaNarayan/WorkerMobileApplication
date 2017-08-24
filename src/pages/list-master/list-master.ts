import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { WorkerJobSearchResults } from '../../providers/providers';

import { WorkerJobSearchResult } from '../../models/workerJobSearchResult';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentWorkerJobSearchResults: WorkerJobSearchResult[]

  constructor(public navCtrl: NavController, public workerJobSearchResults: WorkerJobSearchResults, public modalCtrl: ModalController) {
    this.currentWorkerJobSearchResults = this.workerJobSearchResults.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }*/

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  openItem(workerJobSearchResult: WorkerJobSearchResult) {
    this.navCtrl.push(ItemDetailPage, {
      workerJobSearchResult: workerJobSearchResult
    });
  }
  
  onInput(searchTerm: String) {
  }
}
