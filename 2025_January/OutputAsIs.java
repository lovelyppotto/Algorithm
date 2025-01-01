// 백준 11718) 그대로 출력하기

import java.util.*;

public class OutputAsIs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Scanner 클래스의 hasNext() 메서드
        // 다음 입력값이 있는지 아닌지를 확인하여 Boolean 값으로 반환한다
        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }
        sc.close();
    }
}