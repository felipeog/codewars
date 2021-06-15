const getCount = require("./index");

describe("Vowels Count Tests", () => {
  test("Should return 5 for 'abracadabra'", () => {
    expect(getCount("abracadabra")).toEqual(5);
  });

  test("Should return 4 for 'pear tree'", () => {
    expect(getCount("pear tree")).toEqual(4);
  });

  test("Should return 13 for 'o a kak ushakov lil vo kashu kakao'", () => {
    expect(getCount("o a kak ushakov lil vo kashu kakao")).toEqual(13);
  });

  test("Should return 0 for 'my pyx'", () => {
    expect(getCount("my pyx")).toEqual(0);
  });

  test("Should return 168 for a long input", () => {
    expect(
      getCount(
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"
      )
    ).toEqual(168);
  });
});
