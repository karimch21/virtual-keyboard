let keysView = {
  "en":{
    "shift":{
      "one": [[192, '~'],[49, '!'],[50, '@'],[51, '#'],[52, '$'],[53, '%'],[54, '^'],[55, '&'],[56, '*'],[57, '('],[48,")"],[189,"_"],[197,"+"],[8,"Backspace"]],
      "two": [[9,"Tab"],[81,"Q"],[87,"W"],[69,"E"],[82,"R"],[84,"T"],[89,"Y"],[85,"U"],[73,"I"],[70,"O"],[80,"P"],[219,"["],[221,"]"], [220,'|']],
      "three": [[20,"CapsLock"], [65,"A"],[83,"S"],[68,"D"],[70,"F"],[71,"G"],[72,"H"],[74,"J"],[75,"K"],[76,"L"],[186,":"],[222,'"'], [13,"Enter"]],
      "four": [[16,"Shift"], [90,"Z"],[88,"X"],[67,"C"],[86,"V"],[66,"B"],[78,"N"],[77,"M"],[188,"<"],[190,">"],[191,"?"],[13,"Shift"],[38,"Up"]],
      "five": [[17,"Ctrl"],[91,"Win"],[18,"Alt"],[32,"Space"],[18,"Alt"],[17,"Ctrl"], [37,"Left"],[40,"Down"], [39,"Right"]]
    },
    "unshift":{
      "one": [[192,"`"],[49,"1"],[50,"2"],[51,"3"],[52,"4"],[53,"5"],[54,"6"],[55,"7"],[56,"8"],[57,"9"],[48,"0"],[189,"-"],[187,"="],[8,"Backspace"]],

      "two":
      [[9,"Tab"],[81,"q"],[87,"w"],[69,"e"],[82,"r"],[84,"t"],[89,"y"],[85,"u"],[73,"i"],[79,"o"],[80,"p"],[219,"["],[221,"]"], [220,String('\/')]],

      "three": 
      [[20,"CapsLock"], [65,"a"],[83,"s"],[68,"d"],[70,"f"],[71,"g"],[72,"h"],[74,"j"],[75,"k"],[76,"l"],[186,":"],[222,'"'], [13,"Enter"]],

      "four": 
      [[16,"Shift"], [90,"z"],[88,"x"],[67,"c"],[86,"v"],[66,"b"],[78,"n"],[77,"m"],[188,","],[190,"."],[191,"/"],[13,'Shift'],[38,"Up"]],

      "five": 
      [[17,"Ctrl"],[91,"Win"],[18,"Alt"],[32,"Space"],[18,"Alt"],[17,"Ctrl"], [37,"Left"],[40,"Down"], [39,"Right"]]
    }
  },

 
  

  "ru":{
    "shift":{
      "one": [[192,"Ё"],[49,"!"],[50,"\""],[51,"№"],[52,";"],[53, '%'],[54,":"],[55,"?"],[56, '*'],[57, '('],[48,")"],[189,"_"],[187,"+"],[8,"Backspace"]],

      "two": [[9,"Tab"],[81,"Й"],[87,"Ц"],[69,"У"],[82,"К"],[84,"Е"],[89,"Н"],[85,"Г"],[73,"Ш"],[79,"Щ"],[80,"З"],[219,"Х"],[221,"Ъ"], [220,'/']],

      "three": [[20,"CapsLock"], [65,"Ф"],[83,"Ы"],[68,"В"],[70,"А"],[71,"П"],[72,"Р"],[74,"О"],[75,"Л"],[76,"Д"],[186,"Ж"],[222,'Э'],[13,"Enter"]],

      "four": [[16,"Shift"], [90,"Я"],[88,"Ч"],[67,"С"],[86,"М"],[66,"И"],[78,"Т"],[77,"Ь"],[188,"Б"],[190,"Ю"],[191,","],[13,"Shift"],[38,"Up"]],

      "five": 
      [[17,"Ctrl"],[91,"Win"],[18,"Alt"],[32,"Space"],[18,"Alt"],[17,"Ctrl"], [37,"Left"],[40,"Down"], [39,"Right"]]
    },
    "unshift":{
      "one": [[192,"ё"],[49,"1"],[50,"2"],[51,"3"],[52,"4"],[53, '5'],[54,"6"],[55,"7"],[56, '8'],[57, '9'],[48,"0"],[189,"-"],[187,"="],[8,"Backspace"]],

      "two": [[9,"Tab"],[81,"й"],[87,"ц"],[69,"у"],[82,"к"],[84,"е"],[89,"н"],[85,"г"],[73,"ш"],[79,"щ"],[80,"з"],[219,"х"],[221,"ъ"], [220,'\\']],

      "three": [[20,"CapsLock"], [65,"ф"],[83,"ы"],[68,"в"],[70,"а"],[71,"п"],[72,"р"],[74,"о"],[75,"л"],[76,"д"],[186,"ж"],[222,'э'],[13,"Enter"]],

      "four": [[16,"Shift"], [90,"я"],[88,"ч"],[67,"с"],[86,"м"],[66,"и"],[78,"т"],[77,"ь"],[188,"б"],[190,"ю"],[191,"."],[13,"Shift"],[38,"Up"]],

      "five": 
      [[17,"Ctrl"],[91,"Win"],[18,"Alt"],[32,"Space"],[18,"Alt"],[17,"Ctrl"], [37,"Left"],[40,"Down"], [39,"Right"]]
    }, 
  },
}

// let a = {
//   8:'backspace',	
//   9:'tab',
//   13:'enter',	
//   16:'shift',	
//   17:'ctrl',
//   18:'alt',
//   20:'caps lock',	
//   32:'Space',	
//   34:'page down',	
//   35:'end',	
//   36:'home',	
//   37:'arrow left',	
//   38:'arrow up',	
//   39:'arrow right',
//   40:'arrow down',	
//   46:'delete',	
//   48:0,	
//   49:1,	
//   50:2,
//   51:3,	
//   52:4,	
//   53:5,	
//   54:6,	
//   55:7,	
//   56:8,	
//   57:9,	
//   65:'a',	
//   66:'b',	
//   67:'c',	
//   68:'d',	
//   69:'e',
//   70:'f',	
//   71:'g',	
//   72:'h',	
//   73:'i',	
//   74:'j',	
//   75:'k',	
//   76:'l',	
//   77:'m',	
//   78:'n',	
//   79:'o',	
//   80:'p',	
//   81:'q',	
//   82:'r',	
//   83:'s',	
//   84:'t',	
//   85:'u',	
//   86:'v',	
//   87:'w',	
//   88:'x',	
//   89:'y',	
//   90:'z'
// }

let keys = {
  en:{
    shift: {
      8:'backspace',	
      9:'tab',
      13:'enter',	
      16:'shift',	
      17:'ctrl',
      18:'alt',
      20:'caps lock',	
      32:'Space',	
      37:'arrow left',	
      38:'arrow up',	
      39:'arrow right',
      40:'arrow down',	
      46:'delete',
      186:':',
      222:'"',
      188:'<',
      190:'>',
      191:'/',
      192:'~',
      187:'+',
      189:'_',
      219:'{',
      221:'}',
      220: '\|',	
      48:')',	
      49:'!',	
      50:'@',
      51:'#',	
      52:'$',	
      53:'%',	
      54:'^',	
      55:'&',	
      56:'*',	
      57:'(',	
      65:'a',	
      66:'b',	
      67:'c',	
      68:'d',	
      69:'e',
      70:'f',	
      71:'g',	
      72:'h',	
      73:'i',	
      74:'j',	
      75:'k',	
      76:'l',	
      77:'m',	
      78:'n',	
      79:'o',	
      80:'p',	
      81:'q',	
      82:'r',	
      83:'s',	
      84:'t',	
      85:'u',	
      86:'v',	
      87:'w',	
      88:'x',	
      89:'y',	
      90:'z'
    },
    unshift: {
      8:'backspace',	
      9:'tab',
      13:'enter',	
      16:'shift',	
      17:'ctrl',
      18:'alt',
      20:'caps lock',	
      32:'Space',	
      37:'arrow left',	
      38:'arrow up',	
      39:'arrow right',
      40:'arrow down',	
      46:'delete',
      186:';',
      222:'\'',
      188:',',
      189:'-',
      190:'.',
      191:'/',
      192:'`',
      187:'=',
      219:'[',
      221:']',
      220: '\\',	
      48:'0',	
      49:'1',	
      50:'2',
      51:'3',	
      52:'4',	
      53:'5',	
      54:'6',	
      55:'7',	
      56:'8',	
      57:'9',	
      65:'a',	
      66:'b',	
      67:'c',	
      68:'d',	
      69:'e',
      70:'f',	
      71:'g',	
      72:'h',	
      73:'i',	
      74:'j',	
      75:'k',	
      76:'l',	
      77:'m',	
      78:'n',	
      79:'o',	
      80:'p',	
      81:'q',	
      82:'r',	
      83:'s',	
      84:'t',	
      85:'u',	
      86:'v',	
      87:'w',	
      88:'x',	
      89:'y',	
      90:'z'
    }
  },
  ru:{
    shift: {
      8:'backspace',	
      9:'tab',
      13:'enter',	
      16:'shift',	
      17:'ctrl',
      18:'alt',
      20:'caps lock',	
      32:'Space',	
      37:'arrow left',	
      38:'arrow up',	
      39:'arrow right',
      40:'arrow down',	
      46:'delete',
      186:'Ж',
      222:'Э',
      188:'Б',
      190:'Ю',
      191:',',
      192:'Ё',
      187:'+',
      189:'_',
      219:'Х',
      221:'Ъ',
      220: '\/',	
      48:')',	
      49:'!',	
      50:'"',
      51:'№',	
      52:';',	
      53:'%',	
      54:':',	
      55:'?',	
      56:'*',	
      57:'(',	
      65:'ф',	
      66:'и',	
      67:'с',	
      68:'в',	
      69:'у',
      70:'а',	
      71:'п',	
      72:'р',	
      73:'ш',	
      74:'о',	
      75:'л',	
      76:'д',	
      77:'ь',	
      78:'т',	
      79:'щ',	
      80:'з',	
      81:'й',	
      82:'г',	
      83:'ы',	
      84:'е',	
      85:'г',	
      86:'м',	
      87:'ц',	
      88:'ч',	
      89:'н',	
      90:'я'
    },
    unshift: {
      8:'backspace',	
      9:'tab',
      13:'enter',	
      16:'shift',	
      17:'ctrl',
      18:'alt',
      20:'caps lock',	
      32:'Space',	
      37:'arrow left',	
      38:'arrow up',	
      39:'arrow right',
      40:'arrow down',	
      46:'delete',
      186:'ж',
      222:'э',
      188:'б',
      189:'-',
      190:'ю',
      191:'.',
      192:'`',
      187:'=',
      219:'х',
      221:'ъ',
      220: '\\',	
      48:'0',	
      49:'1',	
      50:'2',
      51:'3',	
      52:'4',	
      53:'5',	
      54:'6',	
      55:'7',	
      56:'8',	
      57:'9',	
      65:'ф',	
      66:'и',	
      67:'с',	
      68:'в',	
      69:'у',
      70:'а',	
      71:'п',	
      72:'р',	
      73:'ш',	
      74:'о',	
      75:'л',	
      76:'д',	
      77:'ь',	
      78:'т',	
      79:'о',	
      80:'з',	
      81:'й',	
      82:'г',	
      83:'ы',	
      84:'е',	
      85:'г',	
      86:'м',	
      87:'ц',	
      88:'ч',	
      89:'н',	
      90:'я'
    }
  }
}


export {keys,keysView}