import telebot

# Replace with your bot token
bot = telebot.TeleBot('7920990688:AAEQBP8NAnaXOex-rJnydvnepaG056m_010')

# GitHub Pages base URL
base_url = 'https://yourusername.github.io/your-repository/index.html?user='

# Handle the /start command
@bot.message_handler(commands=['start'])
def send_welcome(message):
    user_id = message.from_user.id
    # Generate unique URL with user ID
    unique_url = f"{base_url}{user_id}"
    
    # Send the unique URL to the user
    bot.send_message(message.chat.id, f"Welcome! Here is your unique login link: {unique_url}")
    
    # Optionally log the user's access to the page
    print(f"Generated link for user {user_id}: {unique_url}")

# Run the bot
bot.polling()
