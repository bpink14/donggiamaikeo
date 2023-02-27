
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='Đ';
a[2]='i';
a[3]=' ';
a[4]='l';
a[5]='u';
a[6]='ô';
a[7]='n';
a[8]=' ';
a[9]='t';
a[10]='h';
a[11]='u';
a[12]='i';
a[13]=' ';
a[14]='c';
a[15]='h';
a[16]='ứ';
a[17]=' ';
a[18]='c';
a[19]='ò';
a[20]='n';
a[21]=' ';
a[22]='g';
a[23]='ì';
a[24]=' ';
a[25]='n';
a[26]='ữ';
a[27]='a';
a[28]=' ';
a[29]='♥ ';
a[30]=' ';
a[31]='M';
a[32]='ã';
a[33]='i';
a[34]=' ';
a[35]='k';
a[36]='e';
a[37]='o';
a[38]='.';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Vậy là chốt kèo nhó  <img src='http://website1gia.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p> mọi người đáng eoo quá đê ♥ .<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p> Đồng Giá maix keoo <img src='http://website1gia.com/files/assets/5.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				