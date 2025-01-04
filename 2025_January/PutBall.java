import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();
        int N= Integer.parseInt(str.split(" ")[0]);
        int M = Integer.parseInt(str.split(" ")[1]);

        // 바구니 배열
        int[] arr = new int[N+1];

        // 도현이가 공 넣는 횟수만큼 반복
        for (int i = 1; i <= M; i++) {
            String s = br.readLine();
            // 시작 바구니
            int I = Integer.parseInt(s.split(" ")[0]);
            // 마지막 바구니
            int J = Integer.parseInt(s.split(" ")[1]);
            // 넣는 공 번호
            int K = Integer.parseInt(s.split(" ")[2]);

            // 반복문 통해 바구니의 공을 바꿔준다
            for (int j = I; j <= J; j++) {
                arr[j] = K;
            }
        }

        for (int l = 1; l <= N ; l++) {
            System.out.print(arr[l]);
            if (l != N) {
                System.out.print(" ");
            }
        }
    }
}