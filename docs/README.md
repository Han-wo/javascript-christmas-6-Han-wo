# 12월 이벤트 플래너 - 기능 명세서

## 입력

1. **12월 중 식당 예상 방문 날짜 입력**

   - 사용자에게 1 이상 31 이하의 숫자로 날짜를 입력받는다.
   - 입력값이 1 이상 31 이하의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요." 출력.

2. **주문 메뉴 및 개수 입력**
   - 사용자에게 메뉴와 개수를 입력받는다.
   - 메뉴가 메뉴판에 없는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요." 출력.
   - 메뉴의 개수가 1 이상의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요." 출력.
   - 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요." 출력.
   - 중복 메뉴를 입력한 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요." 출력.

## 출력

1. **주문 메뉴 출력**

   - `<주문 메뉴>` 출력 후, 주문한 메뉴와 개수 출력.

2. **할인 전 총주문 금액 출력**

   - `<할인 전 총주문 금액>` 출력 후, 할인 전 총주문 금액 출력.

3. **증정 메뉴 출력**

   - `<증정 메뉴>` 출력 후, 증정 메뉴가 있는 경우 해당 메뉴 출력, 없으면 "없음" 출력.

4. **혜택 내역 출력**

   - `<혜택 내역>` 출력 후, 적용된 이벤트 내역이 있는 경우 이벤트 내역 출력.
   - 적용된 이벤트가 하나도 없는 경우 "없음" 출력.

5. **총혜택 금액 출력**

   - `<총혜택 금액>` 출력 후, 할인 금액의 합계와 증정 메뉴의 가격을 합산한 금액 출력.

6. **할인 후 예상 결제 금액 출력**

   - `<할인 후 예상 결제 금액>` 출력 후, 할인 전 총주문 금액에서 할인 금액을 차감한 금액 출력.

7. **12월 이벤트 배지 출력**
   - `<12월 이벤트 배지>` 출력 후, 총혜택 금액에 따라 부여되는 이벤트 배지 출력.
   - 이벤트 배지가 부여되지 않는 경우 "없음" 출력.
