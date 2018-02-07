/**
 * Created by admin on 2018/2/7.
 */
function onBridgeReady() {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', weixinRequest,
        function (res) {
            console.log(res);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                paySuccess();
            } else {
                payError();
            }
        }
    );
}
if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}
