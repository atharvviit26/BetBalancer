
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

## **Probability & Probability Distribution of a Random Variable**  

A **random variable \(X\)** represents different betting outcomes:  
- \( X = 1 \) (Winning Outcome)  
- \( X = 0 \) (Losing Outcome)  

The **probability mass function (PMF)** is:  
\[
P(X = x_i) = p_i
\]

where:  
- \( x_i \) is a possible outcome (Win or Lose).  
- \( p_i \) is the probability of that outcome occurring.  

### **Probability of Winning**  
The **probability of a winning outcome** is given by:  

\[
P(Win) = P(A_w \cap B_6) + P(B_w \cap A_6) + P(A_6 \cap B_6)
\]

where:  
- \( P(A_w \cap B_6) \) → Probability that **Team A wins & Team B hits a six**  
- \( P(B_w \cap A_6) \) → Probability that **Team B wins & Team A hits a six**  
- \( P(A_6 \cap B_6) \) → Probability that **Both teams hit a six**  

The **probability of a losing outcome** is:  

\[
P(Lose) = P(A_w \cap B_{\neg6}) + P(B_w \cap A_{\neg6}) + P(A_{\neg6} \cap B_{\neg6})
\]

where:  
- \( P(A_w \cap B_{\neg6}) \) → Probability that **Team A wins & Team B does NOT hit a six**  
- \( P(B_w \cap A_{\neg6}) \) → Probability that **Team B wins & Team A does NOT hit a six**  
- \( P(A_{\neg6} \cap B_{\neg6}) \) → Probability that **No six is hit**  

---

## **Expected Value (Mean), Variance & Standard Deviation**  

### **Mean (Expected Value) \(E[X]\)**  
The **expected value** represents the **average outcome** of the probability distribution:  

\[
E[X] = \sum x_i P(X = x_i)
\]

\[
E[X] = 1 \cdot P(Win) + 0 \cdot P(Lose)
\]

Since multiplying by zero eliminates the second term:  

\[
E[X] = P(Win)
\]

This helps in estimating the **expected return** of a betting strategy.  

---

### **Variance \(Var(X)\) & Standard Deviation \(σ\)**  
Variance (\( Var(X) \)) measures the **spread of outcomes** in the probability distribution:  

\[
Var(X) = E[X^2] - (E[X])^2
\]

For a **Bernoulli random variable** (i.e., win/loss), variance is given by:  

\[
Var(X) = P(Win) \cdot (1 - P(Win))
\]

The **standard deviation** (\( σ \)) is the **square root of the variance**, indicating **how much the actual results may deviate from the expected value**:  

\[
σ = \sqrt{P(Win) \cdot (1 - P(Win))}
\]

These statistical measures are **critical** in understanding the **risk and volatility** associated with different betting strategies.  

---

## **Disclaimer**  
🚨 **This project is purely for educational and personal use.** I do **not encourage betting** or investment in any form. If you choose to use this tool, you do so **at your own risk**. **Always gamble responsibly!**  

---
