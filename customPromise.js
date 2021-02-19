function LPromise(executor){
    var self = this;
    self.status = 'pending'
    self.data = undefined;
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];
    // 状态改为resolve时的回调函数集，可能有多个
    // 作为实参传入executor
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.data = value
            for (let i = 0; i < self.onResolvedCallback.length; i++) {
                // 将值传给回调函数
                self.onResolvedCallback[i](value);
                
            }
        }
    }
    // 作为实参传入executor
    function reject(value) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.data = value;
            for (let i = 0; i < self.onResolvedCallback.length; i++) {
                self.onResolvedCallback[i](value);
                
            }
        }
    }
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

LPromise.prototype.then = function(onResolve, onReject) {
    this.onResolvedCallback.push(onResolve)
    this.onRejectedCallback.push(onReject)
    // 这里返回一个promise
};
LPromise.prototype.catch = function() {};
LPromise.reslove = function() {};
LPromise.reject = function() {}
LPromise.all = function() {}
LPromise.race = function() {}

new Promise((resolve)=>{
    setTimeout(() => {
        resolve(1)
    }, 2000);
})