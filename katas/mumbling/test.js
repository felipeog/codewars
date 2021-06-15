const accum = require("./index");

describe("accum", () => {
  test("Basic tests", () => {
    expect(accum("ZpglnRxqenU")).toEqual(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
    expect(accum("NyffsGeyylB")).toEqual(
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    );
    expect(accum("MjtkuBovqrU")).toEqual(
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
    );
    expect(accum("EvidjUnokmM")).toEqual(
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
    );
    expect(accum("HbideVbxncC")).toEqual(
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
    );
    expect(accum("VwhvtHtrxfE")).toEqual(
      "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee"
    );
    expect(accum("KurgiKmkphY")).toEqual(
      "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy"
    );
    expect(accum("NctlfBlnmfH")).toEqual(
      "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh"
    );
    expect(accum("WegunHvbdmV")).toEqual(
      "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv"
    );
    expect(accum("VoywwSpqidE")).toEqual(
      "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee"
    );
    expect(accum("VbaixFpxdcO")).toEqual(
      "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo"
    );
    expect(accum("OlyqvYwkuzF")).toEqual(
      "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff"
    );
    expect(accum("JrhfdMtchiH")).toEqual(
      "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh"
    );
    expect(accum("JiwpcSwslvW")).toEqual(
      "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww"
    );
    expect(accum("EagpiEvmabJ")).toEqual(
      "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj"
    );
    expect(accum("RznlcEmuxxP")).toEqual(
      "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp"
    );
    expect(accum("OrggaExarzP")).toEqual(
      "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp"
    );
    expect(accum("DriraMtedfB")).toEqual(
      "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb"
    );
    expect(accum("BjxseRxgtjT")).toEqual(
      "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt"
    );
    expect(accum("EquhxOswchE")).toEqual(
      "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee"
    );
  });
});

describe("Random tests", () => {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function accumSol109(s) {
    function capitalize(s) {
      return s.toLowerCase().replace(/\b./g, function (a) {
        return a.toUpperCase();
      });
    }
    var a = s.split(""),
      res = "";
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < i + 1; j++) res += a[i];
      res += "-";
    }
    return capitalize(res.substr(0, res.length - 1));
  }
  function doEx() {
    var i = 0;
    var res = "";
    while (i < 11) {
      if (i % 5 === 0) var n = randint(65, 90);
      else n = randint(97, 122);
      res += String.fromCharCode(n);
      i++;
    }
    return res;
  }

  for (var i = 0; i < 100; i++) {
    var s1 = doEx();

    it("Testing accum: ", function () {
      expect(accum(s1)).toEqual(accumSol109(s1));
    });
  }
});
