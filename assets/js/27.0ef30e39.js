(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{238:function(n,t,e){"use strict";e.r(t);var i=e(0),a=Object(i.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[n._m(0),n._v(" "),e("p",[e("a",{attrs:{href:"http://blog.csdn.net/singwhatiwanna/article/details/17041691",target:"_blank",rel:"noopener noreferrer"}},[n._v("android跨进程通信（IPC）：使用AIDL"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("生成一个默认的且与主线程互相独立的工作者线程来执行所有传送至onStartCommand() 方法的Intetnt。")]),n._v(" "),e("p",[n._v("生成一个工作队列来传送Intent对象给你的onHandleIntent()方法，同一时刻只传送一个Intent对象，这样一来，你就不必担心多线程的问题。在所有的请求(Intent)都被执行完以后会自动停止服务，所以，你不需要自己去调用stopSelf()方法来停止。")]),n._v(" "),e("p",[n._v("该服务提供了一个onBind()方法的默认实现，它返回null")]),n._v(" "),e("p",[n._v("提供了一个onStartCommand()方法的默认实现，它将Intent先传送至工作队列，然后从工作队列中每次取出一个传送至onHandleIntent()方法，在该方法中对Intent对相应的处理。")]),n._v(" "),e("p",[n._v("AIDL (Android Interface Definition Language) 是一种IDL 语言，用于生成可以在Android设备上两个进程之间进行进程间通信(interprocess communication, IPC)的代码。如果在一个进程中（例如Activity）要调用另一个进程中（例如Service）对象的操作，就可以使用AIDL生成可序列化的参数。\nAIDL IPC机制是面向接口的，像COM或Corba一样，但是更加轻量级。它是使用代理类在客户端和实现端传递数据。")])])},[function(){var n=this.$createElement,t=this._self._c||n;return t("h4",{attrs:{id:"intentservice作用是什么-aidl解决了什么问题-小米"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intentservice作用是什么-aidl解决了什么问题-小米","aria-hidden":"true"}},[this._v("#")]),this._v(" intentService作用是什么,AIDL解决了什么问题-小米")])}],!1,null,null,null);a.options.__file="intentService作用是什么，AIDL解决了什么问题？-小米.md";t.default=a.exports}}]);