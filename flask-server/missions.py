import random
import time
from datetime import datetime, date, timedelta

class User:
    def __init__(self, name) -> None:
        self.name = name
        self.last_daily_mission_date = date(1, 1, 1)
        self.last_weekly_mission_date = date(1, 1, 1)
        self.points = 0

    def complete_daily_mission(self):
        if self.check_daily():
            reward = random.randint(1, 10)
            self.last_daily_mission_date = datetime.now().date()
            self.points += reward
            print(f"Mission completed! You earned {reward} coins.")
        else:
            print("Daily mission already completed.")

    def complete_weekly_mission(self):
        if self.check_weekly():
            reward = random.randint(10, 50)
            self.last_weekly_mission_date = datetime.now().date()
            self.points += reward
            print(f"Weekly mission completed! You earned {reward} coins.")
        else:
            print("Weekly mission already completed.")

    def check_daily(self):
        current_date = datetime.now().date()
        if current_date > self.last_daily_mission_date:
            return True
        return False
    
    def check_weekly(self):
        current_date = datetime.now().date()
        if current_date > self.last_weekly_mission_date + timedelta(days=7):
            return True
        return False

    