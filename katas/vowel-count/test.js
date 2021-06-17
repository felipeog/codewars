const { getLoopTestTitle } = require("../../utils/test");
const getCount = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "abracadabra", output: 5 },
    { input: "pear tree", output: 4 },
    { input: "o a kak ushakov lil vo kashu kakao", output: 13 },
    { input: "my pyx", output: 0 },
    {
      input:
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg  k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes gjtzo bazvh tmp lkdas z ieykrma lo u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw bckzazqo uomh lbw hiwy x qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj nk mbehp dr fdjyep rhvxvwjjhzpv pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty",
      output: 168,
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(getCount(input)).toEqual(output);
    });
  });
});
