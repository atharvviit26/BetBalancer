
# **BetBalancer: Optimal Risk-Reward Calculator**  
*A data-driven tool to balance investments based on probabilistic outcomes*  

## **📌 Introduction**  
**BetBalancer** is a web-based optimization tool that calculates the ideal investment distribution between two outcomes to **minimize losses** and **maximize profits** under given constraints. Originally designed for strategic betting scenarios (like IPL matches), its core algorithm can be adapted for **financial hedging, stock arbitrage, or decision-making under uncertainty**.  

### **🤔 Why This Project?**  
- Solves a **real-world optimization problem** using probability and financial logic.  
- Demonstrates how **data-driven decisions** outperform emotional/impulsive choices.  
- **Educational value**: Teaches risk management, JavaScript calculations, and responsive UI design.  

---

## **✨ Features**  
✔ **Automated Investment Calculator**  
   - Input odds for two options, and the tool computes the optimal investment split.  

✔ **Risk Analysis Dashboard**  
   - Displays key metrics:  
     - **Total Investment**  
     - **Optimal Split (Team A vs. Team B)**  
     - **Max Profit**  
     - **Max Loss**  

✔ **Scenario Modeling**  
   - Covers all winning/losing conditions (see table below).  

✔ **Responsive Design**  
   - Works seamlessly on desktop and mobile.
   -  ![image](https://github.com/user-attachments/assets/775a8ee9-69fd-4872-9683-2802c573ae6c)

---

## **📊 Winning/Losing Scenarios**  
| Team A Wins | Team B Wins | Team A Hits 6 | Team B Hits 6 | Outcome  |  
|-------------|-------------|---------------|---------------|----------|  
| ✅          | ❌          | ❌            | ✅            | **Win**  |  
| ❌          | ✅          | ✅            | ❌            | **Win**  |  
| ✅          | ❌          | ✅            | ✅            | **Win**  |  
| ❌          | ✅          | ✅            | ✅            | **Win**  |  
| ✅          | ❌          | ❌            | ❌            | **Lose** |  
| ❌          | ✅          | ❌            | ❌            | **Lose** |  
| ✅          | ❌          | ✅            | ❌            | **Lose** |  
| ❌          | ✅          | ❌            | ✅            | **Lose** |  

### **Key Rules**  
- **Win Conditions**:  
  - Either team wins **AND** the opposing team hits a 6.  
  - Both teams hit 6s (regardless of match result).  
- **Lose Conditions**:  
  - A team wins but the opponent **doesn’t** hit a 6.  
  - Neither team hits a 6.  

---

### **Tech Stack**  
- **Frontend**: HTML, CSS, JavaScript  
- **Logic**: Probability-based arbitrage calculation.  

---

## **🚨 Ethical Note**  
⚠️ **Disclaimer**: This project is **for educational purposes only**. It demonstrates:  
- How **mathematical models** optimize decisions.  
- The importance of **risk assessment** in finance/gaming.  
- **No endorsement of gambling**—always gamble responsibly if legally permissible.  

