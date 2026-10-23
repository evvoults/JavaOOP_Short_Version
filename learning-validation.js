'use strict';
window.LearnValidation={
  normalize(source){
    return source.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\/|\s+/g,
      token=>token.startsWith('"')||token.startsWith("'")?token:'');
  },
  check(source,check){
    const normalized=this.normalize(source),good=this.normalize(check.good),bad=this.normalize(check.bad);
    return normalized.includes(good)&&!normalized.split(good).join('\u0000').includes(bad);
  }
};
