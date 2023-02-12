
function initialWords (word="") {

  const initialWord = word.charAt(0).toUpperCase();

  if(initialWord.match(/^[a-zA-Z0-9]+$/)) {
    console.log("英語");
    return initialWord;
  } else if(ja2Bit(initialWord)) {
    console.log("日本語");

    let kanaArr = [];
    kanaArr['ア'] = 'あいうえおアイウエオ';
    kanaArr['カ'] = 'かきくけこがぎぐげごカキクケコガギグゲゴ';
    kanaArr['サ'] = 'さしすせそざじずぜぞサシスセソザジズゼゾ';
    kanaArr['タ'] = 'たちつてとだぢづでどタチツテトダヂヅデド';
    kanaArr['ナ'] = 'なにぬねのナニヌネノ';
    kanaArr['ハ'] = 'はひふへほぱぴぷぺぽばびぶべぼハヒフヘホパピプペポバビブベボ';
    kanaArr['マ'] = 'まみむめもマミムメモ';
    kanaArr['ヤ'] = 'やゆよヤユヨ';
    kanaArr['ラ'] = 'らりるれろラリルレロ';
    kanaArr['ワ'] = 'わをんワヲン';
    console.log(kanaArr['ア'].indexOf(initialWord));

    if(kanaArr['ア'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'あ行';
    } else if(kanaArr['カ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'か行';
    } else if(kanaArr['サ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'さ行';
    } else if(kanaArr['タ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'た行';
    } else if(kanaArr['ナ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'な行';
    } else if(kanaArr['ハ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'は行';
    } else if(kanaArr['マ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'ま行';
    } else if(kanaArr['ヤ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'や行';
    } else if(kanaArr['ラ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'ら行';
    } else if(kanaArr['ワ'].indexOf(initialWord) !== -1){
      console.log(initialWord);
      return 'わ行';
    } else {
      console.log(initialWord);
      return 'その他';
    }    
  } else {
    console.log("その他");
    return 'その他';

  }
}

function ja2Bit ( str ) {
  return ( str.match(/[^\x01-\x7E]/) )? true : false
}