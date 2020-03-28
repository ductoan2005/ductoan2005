var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.listen(3000);

var request = require('request');

var cheerio = require('cheerio');


app.get('/', function (req, res) {
    var response = {
        mssv:req.query.mssv,
    };
    
    request('http://daotao.huflit.edu.vn/Default.aspx?page=thoikhoabieu&id=' + response.mssv, function (error, response, body) {
        if (error) {
            res.render('index',{html:'co loi xay ra'});
        }
        else {
            $ = cheerio.load(body);
            var name = $(body).find('span#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV').text();
            // var tensv = [];
            // name.map(function(){
            //     $(this).map(function(){
            //         tensv.push({
            //             tenSV:name.text(),
            //         })
            //     })
            // })
            var ds = $(body).find('table#ctl00_ContentPlaceHolder1_ctl00_Table1').children('tbody').children();
            var ctmh = [];
            ds.map(function(){
                $(this).children().map(function(){
                    var element = $(this).attr('onmouseover');
                    if(element){
                        var item = element.split(',');
                        ctmh.push({
                            ngayHoc : item[3].slice(0,-1).slice(1), 
                            tietDau : item[6].slice(0,-1).slice(1),
                            tenMh : item[1].slice(0,-1).slice(1),
                            lopHoc : item[5].slice(0,-1).slice(1),
                            giangVien : item[8].slice(0,-1).slice(1),
                            tenSV : name,
                        }) 
                    }
                });
            })
            // ctmh.each(function(i,e){
            //     res.set(i);
            //     console.log($(this).text());
            // });
            //res.send(ctmh);
            // console.log(tensv);
            // res.render('index',{tensv:tensv});
            res.render('index',{ctmh:ctmh});
        }
    });
});