import DiscordBot from './discord';
import TelegramBot from './telegram';
import BotClient from './bot';

export default function getBots(): BotClient[] {
  const discordBot = DiscordBot.getBot();
  const telegramBot = TelegramBot.getBot();

  return [discordBot, telegramBot];
}
