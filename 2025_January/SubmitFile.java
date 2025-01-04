// 백준 5597) 과제 안 내신 분..?

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        boolean[] submitted = new boolean[31];

        for (int i = 0; i < 28; i++) {
            int num = Integer.parseInt(br.readLine());
            submitted[num] = true;
        }

        for (int j = 1; j <= 30 ; j++) {
            if(!submitted[j]) {
                System.out.println(j);
            }
        }
    }
}

