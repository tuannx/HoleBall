
const {ccclass, property} = cc._decorator;

@ccclass
export default class Hole extends cc.Component {
    @property
    spawnProbability = 1;
    @property
    maxPercentage = 1;
    @property
    border = 0;
    @property({type: cc.Float})
    radiuses: number[] = [];
    
    onLoad () {
        
    }
    start () {

    }

    // update (dt) {}
    setSize(r: number){
        this.node.width = this.node.height = (r+this.border)*2;
        this.getComponent(cc.CircleCollider).radius = r;
    }
    setRandSize(){
        let r = this.radiuses[Math.floor(Math.random()*this.radiuses.length)];
        this.setSize(r);
    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider){
        
    }
    onCollisionStay(other: cc.Collider, self: cc.Collider){
        
    }
    onCollisionExit(other: cc.Collider, self: cc.Collider){
        //console.log("hole collision exit");
        
    }
}