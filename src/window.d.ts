import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';

declare global {
  interface Window {
    $MPMessage: MessageApiInjection;
  }
}
