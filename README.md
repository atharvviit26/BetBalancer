
# **BetBalancer - Perfect Balance Between Risk and Reward**  

## **Introduction**  
Hi everyone, I’m **Atharv Sawant**, and I created this project to **optimize investments in IPL betting** on platforms like **Stake**. The idea for this project came from my close friend **Pranav Pharande**, who follows a **strategic approach** to minimize losses and maximize profits while betting. However, manually calculating the optimal investment for each team can be **time-consuming and error-prone**.  

To **solve this real-life problem**, I built a **responsive and user-friendly** web tool that allows users to simply **enter the current betting odds for both teams**. The tool then **automatically computes the optimal investment amounts**, helping users make **data-driven decisions** to minimize potential losses and maximize potential profits.  

---

## **Features**  
✅ **Automated Calculation**: Enter the current betting prices, and the tool instantly computes **how much to invest in each team**.  

✅ **Summary Table**: Displays key financial metrics, including:  
   - **Total Investment**  
   - **Optimal Investment Amount for Team A & Team B**  
   - **Maximum Possible Profit**  
   - **Maximum Possible Loss**  

✅ **Responsive & User-Friendly Interface**:  
   - The website is designed to work **seamlessly across different devices**, ensuring a smooth user experience.
   - ![image](https://github.com/user-attachments/assets/775a8ee9-69fd-4872-9683-2802c573ae6c)


✅ **Real-Life Problem Solving**:  
   - This project addresses a **real challenge** faced by betting enthusiasts by **simplifying complex probability calculations** into a **one-click solution**.  

---

## **Winning & Losing Scenarios Table**  

| Team A Wins | Team B Wins | Team A Hits 6 | Team B Hits 6 | Outcome |
|------------|------------|--------------|--------------|---------|
| ✅        | ❌        | ❌          | ✅          | ✅ Win  |
| ❌        | ✅        | ✅          | ❌          | ✅ Win  |
| ✅        | ❌        | ✅          | ✅          | ✅ Win  |
| ❌        | ✅        | ✅          | ✅          | ✅ Win  |
| ✅        | ❌        | ❌          | ❌          | ❌ Lose |
| ❌        | ✅        | ❌          | ❌          | ❌ Lose |
| ✅        | ❌        | ✅          | ❌          | ❌ Lose |
| ❌        | ✅        | ❌          | ✅          | ❌ Lose |

### **Explanation:**  
- ✅ (True) and ❌ (False) represent match results and sixes hit by teams.  
- **Winning Conditions (✅ Win)**:  
  - **Team A wins & Team B hits 6**  
  - **Team B wins & Team A hits 6**  
  - **Both teams hit 6 (Regardless of match result)**  
- **Losing Conditions (❌ Lose)**:  
  - **Team A wins & Team B does NOT hit 6**  
  - **Team B wins & Team A does NOT hit 6**  
  - **Neither team hits a 6 (Regardless of match result)**  

---

## **Disclaimer**  
🚨 **This project is purely for educational and personal use.** I do **not encourage betting** or investment in any form. If you choose to use this tool, you do so **at your own risk**. **Always gamble responsibly!**  

---
