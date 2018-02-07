# 用于微信支付引用的脚本
##  参数及方法说明
* _wxPay.request 调用微信支付后构造的一个对象
* _wxPay.paySuccess 支付成功后调用的方法
* _wxPay.payError 支付失败后调用的方法 

eg:
```javascript
_wxPay={};
_wxPay.request= {
    "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
    "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数     
    "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
    "package":"prepay_id=u802345jgfjsdfgsdg888",     
    "signType":"MD5",         //微信签名方式：     
    "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
}
_wxPay.paySuccess = function(){
    alert('success');
}
_wxPay.payError = function(){
    alert('error');
}
```

# 使用方法：
* 在需要进行微信支付的 html，提供以上3个参数及方法
* 引用这个js

祝你成功~
