function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table width=99% border=0 cellpadding=3 cellspacing=1><form name=search_js2 method=post action=\'https://flymore.ga/e/search/index.php\' onsubmit=\'return search_check(document.search_js2);\'><tr><td height=25><div align=center>关键字: <input name=keyboard type=text size=13></div></td></tr><tr><td><div align=center>范围: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select></div></td></tr><tr><td><div align=center>栏目:<select name=classid><option value=0>所有栏目</option><option value='1'>|-文库</option><option value='2' style='background:#99C4E3'>&nbsp;&nbsp;|-末世机甲</option><option value='3' style='background:#99C4E3'>&nbsp;&nbsp;|-现代都市</option><option value='4' style='background:#99C4E3'>&nbsp;&nbsp;|-古风雅韵</option><option value='5' style='background:#99C4E3'>&nbsp;&nbsp;|-穿越重生</option><option value='6' style='background:#99C4E3'>&nbsp;&nbsp;|-玄幻网游</option><option value='7' style='background:#99C4E3'>&nbsp;&nbsp;|-仙侠修真</option><option value='8' style='background:#99C4E3'>&nbsp;&nbsp;|-灵异神怪</option><option value='9' style='background:#99C4E3'>&nbsp;&nbsp;|-耽美同人</option><option value='10' style='background:#99C4E3'>&nbsp;&nbsp;|-其他攻受</option><option value='11' style='background:#99C4E3'>&nbsp;&nbsp;|-酷儿话题</option><option value='12' style='background:#99C4E3'>|-公告</option></select></div></td></tr><tr><td><div align=center><input type=submit name=Submit value=搜索></div></td></tr></form></table>");