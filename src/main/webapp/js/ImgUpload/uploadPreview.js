﻿/*
 *作者:周祥
 *时间:2014年08月19日
 *介绍:图片上传预览插件 兼容浏览器(IE 谷歌 火狐) 不支持safari
 *网站:http://jquery.decadework.com
 *版本:1.2
 */
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? "" : e(parseInt(c / a)))
				+ ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c
						.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--)
			d[e(c)] = k[c] || e(c);
		k = [ function(e) {
			return d[e]
		} ];
		e = function() {
			return '\\w+'
		};
		c = 1;
	}
	;
	while (c--)
		if (k[c])
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p;
}
		(
				'A.T.B({N:g(2){9 6=3,y=$(3);2=A.B({f:"M",D:E,C:E,k:["L","Q","P","S","R"],w:g(){}},2||{});6.n=g(a){9 8=W;5(4.d!=l){8=4.d(a)}h 5(4.t!=l){8=4.t.d(a)}h 5(4.r!=l){8=4.r.d(a)}v 8};y.V(g(){5(3.j){5(!U("\\.("+2.k.x("|")+")$","i").O(3.j.J())){I("H,K"+2.k.x("，")+"X");3.j="";v 1g}5(1h.1i.1d("1e")>-1){1f{$("#"+2.f).u(\'7\',6.n(3.z[0]))}1n(e){9 7="";9 b=$("#"+2.f);9 c=b.o("c")[0];6.1m();5(1l!=1k){4.o.m.1j.1c()}h{6.12()}7=m.G.13().14;m.G.11();b.Y();b.o("c").Z({\'10\':\'19:s.p.q(1a=1b)\',\'18\':2.D+\'F\',\'15\':2.C+\'F\'});c.16.17("s.p.q").7=7}}h{$("#"+2.f).u(\'7\',6.n(3.z[0]))}2.w()}})}});',
				62,
				86,
				'||opts|this|window|if|_0|src|url|var|file|obj|div|createObjectURL||Img|function|else||value|ImgType|undefined|document|getObjectURL|parent|Microsoft|AlphaImageLoader|webkitURL|DXImageTransform|URL|attr|return|Callback|join|_1|files|jQuery|extend|Height|Width|100|px|selection|选择文件错误|alert|toLowerCase|图片类型必须是|gif|ImgPr|uploadPreview|test|jpg|jpeg|png|bmp|fn|RegExp|change|null|中的一种|hide|css|filter|empty|blur|createRange|text|height|filters|item|width|progid|sizingMethod|scale|focus|indexOf|MSIE|try|false|navigator|userAgent|body|self|top|select|catch'
						.split('|'), 0, {}))