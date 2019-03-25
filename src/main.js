import { checkRow } from './../src/sudoku.js';
import { checkColumn } from './../src/sudoku.js';
import { checkBox } from './../src/sudoku.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var a = parseInt($('#1').val());
    var b = parseInt($('#2').val());
    var c = parseInt($('#3').val());
    var d = parseInt($('#4').val());
    var e = parseInt($('#5').val());
    var f = parseInt($('#6').val());
    var g = parseInt($('#7').val());
    var h = parseInt($('#8').val());
    var i = parseInt($('#9').val());

    var aa = parseInt($('#11').val());
    var ab = parseInt($('#12').val());
    var ac = parseInt($('#13').val());
    var ad = parseInt($('#14').val());
    var ae = parseInt($('#15').val());
    var af = parseInt($('#16').val());
    var ag = parseInt($('#17').val());
    var ah = parseInt($('#18').val());
    var ai = parseInt($('#19').val());

    var ba = parseInt($('#21').val());
    var bb = parseInt($('#22').val());
    var bc = parseInt($('#23').val());
    var bd = parseInt($('#24').val());
    var be = parseInt($('#25').val());
    var bf = parseInt($('#26').val());
    var bg = parseInt($('#27').val());
    var bh = parseInt($('#28').val());
    var bi = parseInt($('#29').val());

    var ca = parseInt($('#31').val());
    var cb = parseInt($('#32').val());
    var cc = parseInt($('#33').val());
    var cd = parseInt($('#34').val());
    var ce = parseInt($('#35').val());
    var cf = parseInt($('#36').val());
    var cg = parseInt($('#37').val());
    var ch = parseInt($('#38').val());
    var ci = parseInt($('#39').val());

    var da = parseInt($('#41').val());
    var db = parseInt($('#42').val());
    var dc = parseInt($('#43').val());
    var dd = parseInt($('#44').val());
    var de = parseInt($('#45').val());
    var df = parseInt($('#46').val());
    var dg = parseInt($('#47').val());
    var dh = parseInt($('#48').val());
    var di = parseInt($('#49').val());

    var ea = parseInt($('#51').val());
    var eb = parseInt($('#52').val());
    var ec = parseInt($('#53').val());
    var ed = parseInt($('#54').val());
    var ee = parseInt($('#55').val());
    var ef = parseInt($('#56').val());
    var eg = parseInt($('#57').val());
    var eh = parseInt($('#58').val());
    var ei = parseInt($('#59').val());

    var fa = parseInt($('#61').val());
    var fb = parseInt($('#62').val());
    var fc = parseInt($('#63').val());
    var fd = parseInt($('#64').val());
    var fe = parseInt($('#65').val());
    var ff = parseInt($('#66').val());
    var fg = parseInt($('#67').val());
    var fh = parseInt($('#68').val());
    var fi = parseInt($('#69').val());

    var ga = parseInt($('#71').val());
    var gb = parseInt($('#72').val());
    var gc = parseInt($('#73').val());
    var gd = parseInt($('#74').val());
    var ge = parseInt($('#75').val());
    var gf = parseInt($('#76').val());
    var gg = parseInt($('#77').val());
    var gh = parseInt($('#78').val());
    var gi = parseInt($('#79').val());

    var ha = parseInt($('#81').val());
    var hb = parseInt($('#82').val());
    var hc = parseInt($('#83').val());
    var hd = parseInt($('#84').val());
    var he = parseInt($('#85').val());
    var hf = parseInt($('#86').val());
    var hg = parseInt($('#87').val());
    var hh = parseInt($('#88').val());
    var hi = parseInt($('#89').val());

    var sudokuBoard = [
    // 0  1  2  3  4  5  6  7  8  i  j
      [a, b, c, d, e, f, g, h, i], //0
      [aa, ab, ac, ad, ae, af, ag, ah, ai], //1
      [ba, bb, bc, bd, be, bf, bg, bh, bi], //2
      [ca, cb, cc, cd, ce, cf, cg, ch, ci], //3
      [da, db, dc, dd, de, df, dg, dh, di], //4
      [ea, eb, ec, ed, ee, ef, eg, eh, ei], //5
      [fa, fb, fc, fd, fe, ff, fg, fh, fi], //6
      [ga, gb, gc, gd, ge, gf, gg, gh, gi], //7
      [ha, hb, hc, hd, he, hf, hg, hh, hi]  //8
    ];


    var row = checkRow(sudokuBoard);
    var column = checkColumn(sudokuBoard);
    var box = checkBox(sudokuBoard);

    console.log(sudokuBoard);

    $('#checkRow').text(row);
    $('#checkBox').text(box);
    $('#checkColumn').text(column);


  });
});
