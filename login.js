var express = require('express');
var app = express();
var request = require('request');
app.listen(3000);
app.get('/',function(req,res){
    request('http://daotao.huflit.edu.vn/',function(){
        return new Promise(async(resolve,reject) =>{
            try{
                $ = await request({
                    pathURI: '/default.aspx?',
                    formData:{
                        '__EVENTTARGET':'',
                        '__EVENTARGUMENT':'',
                        'ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtTaiKhoa':'17DH110948',
                        'ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$txtMatKhau':'ductoandk20051997',
                        'ctl00$ContentPlaceHolder1$ctl00$ucDangNhap$btnDangNhap':'Đăng Nhập',
                    },
                    isTransform: true
                });
                let name = $('ctl00_Header1_ucLogout_lblNguoiDung').text();
                if(name.length) console.log('ok');
            }
            catch(error){
                console.log(error);
            }
        })
    })
})