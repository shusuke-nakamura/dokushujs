// オブジェクトのエクスポート
export const obj = {
  console() {
    console.log("オブジェクト(obj)");
  },
};
// 関数Fn
export function fn() {
  console.log("関数(fn)");
}

// クラスのエクスポート
export class StdClass {
  static console() {
    console.log("クラス(StdClass)");
  }
}

// 関数のデフォルトエクスポート
export default function () {
  console.log("デフォルトエクスポート関数");
}
