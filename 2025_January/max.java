// 최대값

import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] nums = new int[9];
        int mx = 0;
        int no = 0;

        for (int i = 0; i < 9; i++) {
            nums[i] = Integer.parseInt(br.readLine());
            if (nums[i] > mx) {
                mx = nums[i];
                no = i+1;
            }
        }

        System.out.println(mx);
        System.out.println(no);
        br.close();
    }
}