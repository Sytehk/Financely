<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class KYCVerifyReject extends Notification
{
    use Queueable;

    public $user;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        //
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $user = $this->user;

        return (new MailMessage)

           ->subject('Proof of Address Request Denied')
            ->greeting('Sorry '. $user->name.'!')
            ->line("Unfortunately We can't verify your Proof of Address. You have 3 attempts to do so. After 3 request you will get permanently banned. Please send us a clear photo of your Goverment issued ID. You clould hold the ID and take a selfie with your face and ID clearly visble to improve your authenticity.")
            ->line("Also you need accurate and real identity info. Document must not be expired. We do not wish to do business with anonymous users. To submit another application please login in your account. For login click login now button below. ")
            ->action('Login Now', route('login'))
            ->line('Thank you for using our website! If you face any problems feel free to contact us anytime.');


    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
