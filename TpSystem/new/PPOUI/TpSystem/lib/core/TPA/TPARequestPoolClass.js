const TPARequest=require("./TpaRequest.js");
/**
 * 全局请求池
 */
class TPARequestPoolClass {//todo 缓存传送
    constructor(){
        this.requests={};
    }
    /*static async DeleteCache(pl) {
        for (let i = 0; i < TPACache.length; i++) {
            if (i.from == pl.realName || i.to == pl.realName) {
                let capl = mc.getPlayer(i.from); let name = i.to;
                if (i.type == 1) {
                    capl = mc.getPlayer(i.to);
                    name = i.from;
                }
                if (capl) {
                    capl.tell(Gm_Tell + `传送失败！玩家[${name}]已离线!`);
                }
                TPACache.splice(i, 1);
            }
        }
    }*/
    /**
     * 放入一个请求
     * @param {TPARequest} request 要缓存的tpa请求
     */
    add(request){
        this.initPlayer(request.reciever.xuid);
        this.requests[request.reciever.xuid][request.sender.xuid]=request;
    }
    /**
     * 初始化请求池中的玩家格
     * @param {string} xuid 玩家xuid
     */
    initPlayer(xuid){
        if(this.requests[xuid]==undefined){
            this.requests[xuid]={};
        }
    }
    /**
     * 从请求池中删除一个请求
     * @param {string} sender 发送者的xuid
     * @param {string} reciever 接收者的xuid
     */
    delete(sender,reciever){
        this.requests[reciever][sender]=null;
    }
}
module.exports=TPARequestPoolClass;