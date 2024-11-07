<?

add_action('jet-form-builder/custom-action/assign', function ($request, $handler) {
    $user = get_user_by('id', $request["assign_to"]);
    mail($user->user_email, "Ticking System", "A new ticket has been assigned to you, please check the system.");
}, 10, 2);
