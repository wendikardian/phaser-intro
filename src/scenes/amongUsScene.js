import Phaser from 'phaser';

export default class AmongUsScene extends Phaser.Scene{
    constructor(){
        super('among-us-scene');
    }
    preload(){
        this.load.image(`gameObjectKey` , `location`);
    }

    create(){

    }
}
