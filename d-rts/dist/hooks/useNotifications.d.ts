import { NotificationItem } from '../components/ui/navbar';
interface UseNotificationsOptions {
    pollingInterval?: number;
    enabled?: boolean;
}
interface UseNotificationsReturn {
    notifications: NotificationItem[];
    unreadCount: number;
    loading: boolean;
    error: string | null;
    refresh: () => Promise<void>;
    markAsRead: (id: string) => Promise<void>;
    markAllAsRead: () => Promise<void>;
    clearAll: () => Promise<void>;
}
export declare function useNotifications(options?: UseNotificationsOptions): UseNotificationsReturn;
export {};
