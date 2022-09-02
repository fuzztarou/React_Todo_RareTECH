/**
 * useApp.spec
 */

import { renderHook, act } from "@testing-library/react";
/* hooks */
import { useApp } from "./useApp";
/* constants */
//import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

describe("[Hooksテスト]", () => {
  describe("[関数テスト] onChangeAddInputValue", () => {
    test("[正常系]　addInputValueを更新できること", () => {
      //予測値
      const expectedValue = "テスト";
      //ダミー引数
      const eventObject = {
        target: {
          value: expectedValue,
        },
      };
      //hooksを呼び出す
      const { result } = renderHook(() => useApp());
      // addInputValueが空文字であること
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行
      act(() => result.current[1].onChangeAddInputValue(eventObject));
      //addInputValueが更新されていること
      expect(result.current[0].addInputValue).toBe(expectedValue);
    });
  });
});
