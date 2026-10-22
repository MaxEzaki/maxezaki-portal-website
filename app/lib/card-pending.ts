import { characters } from "../_data/characters";

/**
 * ?type= で開いたとき、正しいカードに切り替わるまでカードを隠すための属性。
 * 静的 HTML には常に index のカードが入っているため、そのまま見せると
 * 誤ったカードが一瞬表示されてしまう。
 */
export const CARD_PENDING_ATTR = "data-card-pending";

/** index 以外の有効な type が指定されていれば、描画前に属性を付ける */
const pendingTypes = characters
  .map((c) => c.type)
  .filter((type) => type !== "index");

/**
 * 通常は card.tsx が正しいカードに切り替えた時点で属性を外す。
 * JS の読み込みに失敗した場合に隠れたままにならないよう、ページの読み込み
 * 完了から一定時間たっても残っていれば外す。固定時間ではなく load 起点に
 * するのは、低速回線で JS より先にフォールバックが発火して誤ったカードが
 * 見えてしまうのを防ぐため。
 */
const FALLBACK_AFTER_LOAD_MS = 2000;

export const cardPendingScript = `(function(){try{var t=new URLSearchParams(location.search).get("type");if(!t||${JSON.stringify(
  pendingTypes
)}.indexOf(t)<0)return;var d=document.documentElement;d.setAttribute("${CARD_PENDING_ATTR}","");addEventListener("load",function(){setTimeout(function(){d.removeAttribute("${CARD_PENDING_ATTR}")},${FALLBACK_AFTER_LOAD_MS})})}catch(e){}})();`;
