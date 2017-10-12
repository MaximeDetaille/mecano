import { defineMessages } from 'react-intl';

const defaultLocale = 'fr';

const defaultMessages = defineMessages({"deviseTokenAuthSessionsNotConfirmed":{"id":"devise_token_auth.sessions.not_confirmed","defaultMessage":"Un e-mail de confirmation de votre compte a été envoyé à '%{email}'. Merci de suivre les instructions afin de valider votre compte"},"deviseTokenAuthSessionsBadCredentials":{"id":"devise_token_auth.sessions.bad_credentials","defaultMessage":"Mot de passe ou identifiant invalide."},"deviseTokenAuthSessionsNotSupported":{"id":"devise_token_auth.sessions.not_supported","defaultMessage":"Utilisez POST /sign_in pour la connexion. GET n'est pas supporté."},"deviseTokenAuthSessionsUserNotFound":{"id":"devise_token_auth.sessions.user_not_found","defaultMessage":"L'utilisateur est inconnu ou n'est pas connecté."},"deviseTokenAuthTokenValidationsInvalid":{"id":"devise_token_auth.token_validations.invalid","defaultMessage":"Mot de passe ou identifiant invalide."},"deviseTokenAuthRegistrationsMissingConfirmSuccessUrl":{"id":"devise_token_auth.registrations.missing_confirm_success_url","defaultMessage":"Le paramètre 'confirm_success_url' est manquant."},"deviseTokenAuthRegistrationsRedirectUrlNotAllowed":{"id":"devise_token_auth.registrations.redirect_url_not_allowed","defaultMessage":"Redirection vers '%{redirect_url}' n'est pas autorisée."},"deviseTokenAuthRegistrationsEmailAlreadyExists":{"id":"devise_token_auth.registrations.email_already_exists","defaultMessage":"Un compte existe déjà avec l'adresse e-mail suivante '%{email}'"},"deviseTokenAuthRegistrationsAccountWithUidDestroyed":{"id":"devise_token_auth.registrations.account_with_uid_destroyed","defaultMessage":"Le compte avec l'identifiant '%{uid}' a été supprimé."},"deviseTokenAuthRegistrationsAccountToDestroyNotFound":{"id":"devise_token_auth.registrations.account_to_destroy_not_found","defaultMessage":"Le compte à supprimer est introuvable."},"deviseTokenAuthRegistrationsUserNotFound":{"id":"devise_token_auth.registrations.user_not_found","defaultMessage":"Utilisateur introuvable."},"deviseTokenAuthPasswordsMissingEmail":{"id":"devise_token_auth.passwords.missing_email","defaultMessage":"Vous devez soumettre un e-mail."},"deviseTokenAuthPasswordsMissingRedirectUrl":{"id":"devise_token_auth.passwords.missing_redirect_url","defaultMessage":"URL de redirection manquante."},"deviseTokenAuthPasswordsNotAllowedRedirectUrl":{"id":"devise_token_auth.passwords.not_allowed_redirect_url","defaultMessage":"Redirection vers '%{redirect_url}' n'est pas autorisée."},"deviseTokenAuthPasswordsSended":{"id":"devise_token_auth.passwords.sended","defaultMessage":"Un e-mail a été envoyé à '%{email}' avec les instructions de réinitialisation du mot de passe."},"deviseTokenAuthPasswordsUserNotFound":{"id":"devise_token_auth.passwords.user_not_found","defaultMessage":"Impossible de trouver l'utilisateur avec l'adresse e-mail suivante '%{email}'."},"deviseTokenAuthPasswordsPasswordNotRequired":{"id":"devise_token_auth.passwords.password_not_required","defaultMessage":"Ce compte ne demande pas de mot de passe. Connectez vous en utilisant '%{provider}'."},"deviseTokenAuthPasswordsMissingPasswords":{"id":"devise_token_auth.passwords.missing_passwords","defaultMessage":"Vous devez remplir les champs 'Mot de passe' et 'Confirmation de mot de passe'."},"deviseTokenAuthPasswordsSuccessfullyUpdated":{"id":"devise_token_auth.passwords.successfully_updated","defaultMessage":"Votre mot de passe a été correctement mis à jour."},"errorsMessagesValidateSignUpParams":{"id":"errors.messages.validate_sign_up_params","defaultMessage":"Les données d'inscription dans le corps de la requête ne sont pas valides."},"errorsMessagesValidateAccountUpdateParams":{"id":"errors.messages.validate_account_update_params","defaultMessage":"Les données de mise à jour dans le corps de la requête ne sont pas valides."},"errorsMessagesNotEmail":{"id":"errors.messages.not_email","defaultMessage":"n'est pas une adresse e-mail"},"deviseMailerConfirmationInstructionsSubject":{"id":"devise.mailer.confirmation_instructions.subject","defaultMessage":"Instructions de confirmation"},"deviseMailerConfirmationInstructionsConfirmLinkMsg":{"id":"devise.mailer.confirmation_instructions.confirm_link_msg","defaultMessage":"Vous pouvez confirmer votre compte e-mail via le lien ci-dessous :"},"deviseMailerConfirmationInstructionsConfirmAccountLink":{"id":"devise.mailer.confirmation_instructions.confirm_account_link","defaultMessage":"Confirmer mon compte"},"deviseMailerResetPasswordInstructionsSubject":{"id":"devise.mailer.reset_password_instructions.subject","defaultMessage":"Instructions de récupération de mot de passe"},"deviseMailerResetPasswordInstructionsRequestResetLinkMsg":{"id":"devise.mailer.reset_password_instructions.request_reset_link_msg","defaultMessage":"Quelqu'un a demandé un lien pour changer votre mot de passe. Pour procéder ainsi, suivez le lien ci-dessous."},"deviseMailerResetPasswordInstructionsPasswordChangeLink":{"id":"devise.mailer.reset_password_instructions.password_change_link","defaultMessage":"Changer mon mot de passe"},"deviseMailerResetPasswordInstructionsIgnoreMailMsg":{"id":"devise.mailer.reset_password_instructions.ignore_mail_msg","defaultMessage":"Si vous n'avez pas demandé cela, veuillez ignorer cet e-mail."},"deviseMailerResetPasswordInstructionsNoChangesMsg":{"id":"devise.mailer.reset_password_instructions.no_changes_msg","defaultMessage":"Votre mot de passe ne changera pas tant que vous n'accédez pas au lien ci-dessus pour en créer un nouveau."},"deviseMailerUnlockInstructionsSubject":{"id":"devise.mailer.unlock_instructions.subject","defaultMessage":"Instructions de déblocage"},"deviseMailerUnlockInstructionsAccountLockMsg":{"id":"devise.mailer.unlock_instructions.account_lock_msg","defaultMessage":"Votre compte a été bloqué en raison de nombreuses tentatives de connexion erronées."},"deviseMailerUnlockInstructionsUnlockLinkMsg":{"id":"devise.mailer.unlock_instructions.unlock_link_msg","defaultMessage":"Cliquez sur le lien ci-dessous pour déverrouiller votre compte:"},"deviseMailerUnlockInstructionsUnlockLink":{"id":"devise.mailer.unlock_instructions.unlock_link","defaultMessage":"Déverrouiller mon compte"},"hello":{"id":"hello","defaultMessage":"bonjour"},"welcome":{"id":"welcome","defaultMessage":"bienvenue"},"type":{"id":"type","defaultMessage":"Français"},"confirm":{"id":"confirm","defaultMessage":"confirmer"},"datetimeDistanceInWordsHalfAMinute":{"id":"datetime.distance_in_words.half_a_minute","defaultMessage":"30 secondes"},"datetimeDistanceInWordsLessThanXSecondsOne":{"id":"datetime.distance_in_words.less_than_x_seconds.one","defaultMessage":"il y a moins d'une seconde"},"datetimeDistanceInWordsLessThanXSecondsOther":{"id":"datetime.distance_in_words.less_than_x_seconds.other","defaultMessage":"il y a moins de %{count} secondes"},"datetimeDistanceInWordsXSecondsOne":{"id":"datetime.distance_in_words.x_seconds.one","defaultMessage":"1 seconde"},"datetimeDistanceInWordsXSecondsOther":{"id":"datetime.distance_in_words.x_seconds.other","defaultMessage":"%{count} secondes"},"datetimeDistanceInWordsLessThanXMinutesOne":{"id":"datetime.distance_in_words.less_than_x_minutes.one","defaultMessage":"il y a moins d'une minute"},"datetimeDistanceInWordsLessThanXMinutesOther":{"id":"datetime.distance_in_words.less_than_x_minutes.other","defaultMessage":"il y a moins de %{count} minutes"},"datetimeDistanceInWordsXMinutesOne":{"id":"datetime.distance_in_words.x_minutes.one","defaultMessage":"1 minute"},"datetimeDistanceInWordsXMinutesOther":{"id":"datetime.distance_in_words.x_minutes.other","defaultMessage":"%{count} minutes"},"datetimeDistanceInWordsAboutXHoursOne":{"id":"datetime.distance_in_words.about_x_hours.one","defaultMessage":"il y a une heure"},"datetimeDistanceInWordsAboutXHoursOther":{"id":"datetime.distance_in_words.about_x_hours.other","defaultMessage":"il y a %{count} heures"},"datetimeDistanceInWordsXDaysOne":{"id":"datetime.distance_in_words.x_days.one","defaultMessage":"1 jour"},"datetimeDistanceInWordsXDaysOther":{"id":"datetime.distance_in_words.x_days.other","defaultMessage":"%{count} jours"},"datetimeDistanceInWordsAboutXMonthsOne":{"id":"datetime.distance_in_words.about_x_months.one","defaultMessage":"il y a 1 mois"},"datetimeDistanceInWordsAboutXMonthsOther":{"id":"datetime.distance_in_words.about_x_months.other","defaultMessage":"il y a %{count} mois"},"datetimeDistanceInWordsXMonthsOne":{"id":"datetime.distance_in_words.x_months.one","defaultMessage":"1 mois"},"datetimeDistanceInWordsXMonthsOther":{"id":"datetime.distance_in_words.x_months.other","defaultMessage":"%{count} mois"},"datetimeDistanceInWordsAboutXYearsOne":{"id":"datetime.distance_in_words.about_x_years.one","defaultMessage":"il y a un an"},"datetimeDistanceInWordsAboutXYearsOther":{"id":"datetime.distance_in_words.about_x_years.other","defaultMessage":"il y a %{count} ans"},"datetimeDistanceInWordsOverXYearsOne":{"id":"datetime.distance_in_words.over_x_years.one","defaultMessage":"il y a plus d'un an"},"datetimeDistanceInWordsOverXYearsOther":{"id":"datetime.distance_in_words.over_x_years.other","defaultMessage":"il y a plus de %{count} ans"},"datetimeDistanceInWordsAlmostXYearsOne":{"id":"datetime.distance_in_words.almost_x_years.one","defaultMessage":"il y a presque un an"},"datetimeDistanceInWordsAlmostXYearsOther":{"id":"datetime.distance_in_words.almost_x_years.other","defaultMessage":"il y a presque %{count} ans"},"dateFormatsDefault":{"id":"date.formats.default","defaultMessage":"%d-%m-%Y"},"dateFormatsShort":{"id":"date.formats.short","defaultMessage":"%e %b"},"dateFormatsLong":{"id":"date.formats.long","defaultMessage":"%d %M %Y"},"dateFormatsOnlyDay":{"id":"date.formats.only_day","defaultMessage":"%e"},"dateDayNames":{"id":"date.day_names","defaultMessage":["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]},"dateAbbrDayNames":{"id":"date.abbr_day_names","defaultMessage":["lun","mar","mer","jeu","ven","sam","dim"]},"dateMonthNames":{"id":"date.month_names","defaultMessage":[null,"janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},"dateAbbrMonthNames":{"id":"date.abbr_month_names","defaultMessage":[null,"janv","févr","mars","avr","mai","juin","juill","août","sept","oct","nov","déc"]},"userFirstName":{"id":"user.first_name","defaultMessage":"prénom"},"userLastName":{"id":"user.last_name","defaultMessage":"nom de famille"},"userEmail":{"id":"user.email","defaultMessage":"email"},"userPassword":{"id":"user.password","defaultMessage":"mot de passe"},"userPasswordConfirmation":{"id":"user.password_confirmation","defaultMessage":"confirmation du mot de passe"},"userPasswordForgotten":{"id":"user.password_forgotten","defaultMessage":"Mot de passe oublié"},"userNoAccountYetMessage":{"id":"user.no_account_yet_message","defaultMessage":"Pas encore de compte ? Enregistre toi !"},"userAlreadyAccountMessage":{"id":"user.already_account_message","defaultMessage":"Déjà un compte ? Connecte toi !"},"userLogin":{"id":"user.login","defaultMessage":"Se connecter"},"userSignup":{"id":"user.signup","defaultMessage":"Créer un compte"},"userCurrentPassword":{"id":"user.current_password","defaultMessage":"Mot de passe actuel"},"userNewPassword":{"id":"user.new_password","defaultMessage":"Nouveau mot de passe"},"userNewPasswordConfirmation":{"id":"user.new_password_confirmation","defaultMessage":"Confirmation du nouveau mot de passe"},"userChangePassword":{"id":"user.change_password","defaultMessage":"Changer de mot de passe"},"mecanoPro":{"id":"mecano.pro","defaultMessage":"professionnel"},"mecanoNonPro":{"id":"mecano.non_pro","defaultMessage":"passionné"},"mecanoMobile":{"id":"mecano.mobile","defaultMessage":"se déplace"},"mecanoNonMobile":{"id":"mecano.non_mobile","defaultMessage":"ne se déplace pas"},"mecanoReviews":{"id":"mecano.reviews","defaultMessage":"avis"},"mecanoDescription":{"id":"mecano.description","defaultMessage":"description"},"mecanoNoDescriptionMessage":{"id":"mecano.no_description_message","defaultMessage":"Votre description est vide. Avec une description, votre profil sera mieux référencé et vous serez contacté par plus d'utilisateurs."},"mecanoVehicles":{"id":"mecano.vehicles","defaultMessage":"véhicules"},"mecanoContact":{"id":"mecano.contact","defaultMessage":"contacter"},"mecanoAllVehiclesMessage":{"id":"mecano.all_vehicles_message","defaultMessage":"intervient sur tous véhicules"},"mecanoPrice":{"id":"mecano.price","defaultMessage":"tarif"},"mecanoCompanyName":{"id":"mecano.company_name","defaultMessage":"entreprise"},"mecanoFullAddress":{"id":"mecano.full_address","defaultMessage":"adresse"},"mecanoRadius":{"id":"mecano.radius","defaultMessage":"rayon"},"mecanoTechnicalSkillsString":{"id":"mecano.technical_skills_string","defaultMessage":"domaines techniques"},"mecanoTechnicalSkillsCarBody":{"id":"mecano.technical_skills.car_body","defaultMessage":"carrosserie"},"mecanoTechnicalSkillsExhaust":{"id":"mecano.technical_skills.exhaust","defaultMessage":"carburation/échappement"},"mecanoTechnicalSkillsWheels":{"id":"mecano.technical_skills.wheels","defaultMessage":"roues"},"mecanoTechnicalSkillsBrakes":{"id":"mecano.technical_skills.brakes","defaultMessage":"freins"},"mecanoTechnicalSkillsTiming":{"id":"mecano.technical_skills.timing","defaultMessage":"distribution"},"mecanoTechnicalSkillsGearingSystem":{"id":"mecano.technical_skills.gearing_system","defaultMessage":"transmission"},"mecanoTechnicalSkillsElectricity":{"id":"mecano.technical_skills.electricity","defaultMessage":"électricité"},"mecanoTechnicalSkillsInterior":{"id":"mecano.technical_skills.interior","defaultMessage":"sellerie"},"mecanoTechnicalSkillsAirConditioning":{"id":"mecano.technical_skills.air_conditioning","defaultMessage":"climatisation"},"mecanoTechnicalSkillsShockAbsorbers":{"id":"mecano.technical_skills.shock_absorbers","defaultMessage":"amortisseurs"},"mecanoTechnicalSkillsElectronic":{"id":"mecano.technical_skills.electronic","defaultMessage":"électronique"},"mecanoTechnicalSkillsMaintenance":{"id":"mecano.technical_skills.maintenance","defaultMessage":"entretien"},"activerecordErrorsModelsUserAttributesPasswordConfirmationConfirmation":{"id":"activerecord.errors.models.user.attributes.password_confirmation.confirmation","defaultMessage":"ne correspond pas"},"activerecordErrorsModelsUserAttributesPasswordTooShort":{"id":"activerecord.errors.models.user.attributes.password.too_short","defaultMessage":"est trop court"},"activerecordErrorsModelsUserAttributesEmailTaken":{"id":"activerecord.errors.models.user.attributes.email.taken","defaultMessage":"est déjà utilisé pour un compte"},"adminJsTrue":{"id":"admin.js.true","defaultMessage":"Vrai"},"adminJsFalse":{"id":"admin.js.false","defaultMessage":"Faux"},"adminJsIsPresent":{"id":"admin.js.is_present","defaultMessage":"Est présent"},"adminJsIsBlank":{"id":"admin.js.is_blank","defaultMessage":"Est vide"},"adminJsDate":{"id":"admin.js.date","defaultMessage":"Date ..."},"adminJsBetweenAnd":{"id":"admin.js.between_and_","defaultMessage":"Entre le ... et le ..."},"adminJsToday":{"id":"admin.js.today","defaultMessage":"Aujourd'hui"},"adminJsYesterday":{"id":"admin.js.yesterday","defaultMessage":"Hier"},"adminJsThisWeek":{"id":"admin.js.this_week","defaultMessage":"Cette semaine"},"adminJsLastWeek":{"id":"admin.js.last_week","defaultMessage":"La semaine dernière"},"adminJsNumber":{"id":"admin.js.number","defaultMessage":"Nombre ..."},"adminJsContains":{"id":"admin.js.contains","defaultMessage":"Contient"},"adminJsIsExactly":{"id":"admin.js.is_exactly","defaultMessage":"Est exactement"},"adminJsStartsWith":{"id":"admin.js.starts_with","defaultMessage":"Commence par"},"adminJsEndsWith":{"id":"admin.js.ends_with","defaultMessage":"Se termine par"},"adminLoading":{"id":"admin.loading","defaultMessage":"Chargement..."},"adminHomeName":{"id":"admin.home.name","defaultMessage":"Accueil"},"adminPaginationPrevious":{"id":"admin.pagination.previous","defaultMessage":"\u0026laquo; Préc."},"adminPaginationNext":{"id":"admin.pagination.next","defaultMessage":"Suiv. \u0026raquo;"},"adminPaginationTruncate":{"id":"admin.pagination.truncate","defaultMessage":"…"},"adminMiscFilterDateFormat":{"id":"admin.misc.filter_date_format","defaultMessage":"dd/mm/yy"},"adminMiscSearch":{"id":"admin.misc.search","defaultMessage":"Recherche"},"adminMiscFilter":{"id":"admin.misc.filter","defaultMessage":"Filtre"},"adminMiscRefresh":{"id":"admin.misc.refresh","defaultMessage":"Rafraîchir"},"adminMiscShowAll":{"id":"admin.misc.show_all","defaultMessage":"Montrer tout"},"adminMiscAddFilter":{"id":"admin.misc.add_filter","defaultMessage":"Ajouter un filtre"},"adminMiscBulkMenuTitle":{"id":"admin.misc.bulk_menu_title","defaultMessage":"Élements sélectionnés"},"adminMiscRemove":{"id":"admin.misc.remove","defaultMessage":"Supprimer"},"adminMiscAddNew":{"id":"admin.misc.add_new","defaultMessage":"Ajouter"},"adminMiscChosen":{"id":"admin.misc.chosen","defaultMessage":"Choisi %{name}"},"adminMiscChoseAll":{"id":"admin.misc.chose_all","defaultMessage":"Choisir tout"},"adminMiscClearAll":{"id":"admin.misc.clear_all","defaultMessage":"Effacer tout"},"adminMiscUp":{"id":"admin.misc.up","defaultMessage":"Monter"},"adminMiscDown":{"id":"admin.misc.down","defaultMessage":"Descendre"},"adminMiscNavigation":{"id":"admin.misc.navigation","defaultMessage":"Navigation"},"adminMiscNavigationStaticLabel":{"id":"admin.misc.navigation_static_label","defaultMessage":"Liens"},"adminMiscLogOut":{"id":"admin.misc.log_out","defaultMessage":"Se déconnecter"},"adminMiscAgo":{"id":"admin.misc.ago","defaultMessage":""},"adminFlashSuccessful":{"id":"admin.flash.successful","defaultMessage":"%{name} : %{action} avec succès"},"adminFlashError":{"id":"admin.flash.error","defaultMessage":"%{name} : n'a pas pu être %{action}"},"adminFlashNoaction":{"id":"admin.flash.noaction","defaultMessage":"Aucune action n'a été effectuée"},"adminFlashModelNotFound":{"id":"admin.flash.model_not_found","defaultMessage":"Le modèle '%{model}' est introuvable"},"adminFlashObjectNotFound":{"id":"admin.flash.object_not_found","defaultMessage":"%{model} avec l'ID '%{id}' est introuvable"},"adminTableHeadersModelName":{"id":"admin.table_headers.model_name","defaultMessage":"Nom du modèle"},"adminTableHeadersLastUsed":{"id":"admin.table_headers.last_used","defaultMessage":"Dernière utilisation"},"adminTableHeadersRecords":{"id":"admin.table_headers.records","defaultMessage":"Enregistrements"},"adminTableHeadersUsername":{"id":"admin.table_headers.username","defaultMessage":"Nom d'utilisateur"},"adminTableHeadersChanges":{"id":"admin.table_headers.changes","defaultMessage":"Changements"},"adminTableHeadersCreatedAt":{"id":"admin.table_headers.created_at","defaultMessage":"Date/Heure"},"adminTableHeadersItem":{"id":"admin.table_headers.item","defaultMessage":"Élement"},"adminTableHeadersMessage":{"id":"admin.table_headers.message","defaultMessage":"Message"},"adminActionsDashboardTitle":{"id":"admin.actions.dashboard.title","defaultMessage":"Administration"},"adminActionsDashboardMenu":{"id":"admin.actions.dashboard.menu","defaultMessage":"Panneau de contrôle"},"adminActionsDashboardBreadcrumb":{"id":"admin.actions.dashboard.breadcrumb","defaultMessage":"Panneau de contrôle"},"adminActionsIndexTitle":{"id":"admin.actions.index.title","defaultMessage":"Liste des %{model_label_plural}"},"adminActionsIndexMenu":{"id":"admin.actions.index.menu","defaultMessage":"Liste"},"adminActionsIndexBreadcrumb":{"id":"admin.actions.index.breadcrumb","defaultMessage":"%{model_label_plural}"},"adminActionsShowTitle":{"id":"admin.actions.show.title","defaultMessage":"Détails pour %{model_label} '%{object_label}'"},"adminActionsShowMenu":{"id":"admin.actions.show.menu","defaultMessage":"Voir"},"adminActionsShowBreadcrumb":{"id":"admin.actions.show.breadcrumb","defaultMessage":"%{object_label}"},"adminActionsShowInAppMenu":{"id":"admin.actions.show_in_app.menu","defaultMessage":"Voir dans l'application"},"adminActionsNewTitle":{"id":"admin.actions.new.title","defaultMessage":"Nouveau %{model_label}"},"adminActionsNewMenu":{"id":"admin.actions.new.menu","defaultMessage":"Ajouter nouveau"},"adminActionsNewBreadcrumb":{"id":"admin.actions.new.breadcrumb","defaultMessage":"Nouveau"},"adminActionsNewLink":{"id":"admin.actions.new.link","defaultMessage":"Ajouter un nouveau %{model_label}"},"adminActionsNewDone":{"id":"admin.actions.new.done","defaultMessage":"créé(e)"},"adminActionsEditTitle":{"id":"admin.actions.edit.title","defaultMessage":"Modifier %{model_label} '%{object_label}'"},"adminActionsEditMenu":{"id":"admin.actions.edit.menu","defaultMessage":"Modifier"},"adminActionsEditBreadcrumb":{"id":"admin.actions.edit.breadcrumb","defaultMessage":"Modifier"},"adminActionsEditLink":{"id":"admin.actions.edit.link","defaultMessage":"Modifier ce %{model_label}"},"adminActionsEditDone":{"id":"admin.actions.edit.done","defaultMessage":"mis(e) à jour"},"adminActionsDeleteTitle":{"id":"admin.actions.delete.title","defaultMessage":"Supprimer %{model_label} '%{object_label}'"},"adminActionsDeleteMenu":{"id":"admin.actions.delete.menu","defaultMessage":"Supprimer"},"adminActionsDeleteBreadcrumb":{"id":"admin.actions.delete.breadcrumb","defaultMessage":"Supprimer"},"adminActionsDeleteLink":{"id":"admin.actions.delete.link","defaultMessage":"Supprimer '%{object_label}'"},"adminActionsDeleteDone":{"id":"admin.actions.delete.done","defaultMessage":"supprimé(e)"},"adminActionsBulkDeleteTitle":{"id":"admin.actions.bulk_delete.title","defaultMessage":"Supprimer %{model_label_plural}"},"adminActionsBulkDeleteMenu":{"id":"admin.actions.bulk_delete.menu","defaultMessage":"Suppression multiple"},"adminActionsBulkDeleteBreadcrumb":{"id":"admin.actions.bulk_delete.breadcrumb","defaultMessage":"Suppression multiple"},"adminActionsBulkDeleteBulkLink":{"id":"admin.actions.bulk_delete.bulk_link","defaultMessage":"Supprimer les %{model_label_plural} sélectionné(e)s"},"adminActionsExportTitle":{"id":"admin.actions.export.title","defaultMessage":"Exporter %{model_label_plural}"},"adminActionsExportMenu":{"id":"admin.actions.export.menu","defaultMessage":"Exporter"},"adminActionsExportBreadcrumb":{"id":"admin.actions.export.breadcrumb","defaultMessage":"Exporter"},"adminActionsExportLink":{"id":"admin.actions.export.link","defaultMessage":"Exporter les %{model_label_plural} trouvé(e)s"},"adminActionsExportBulkLink":{"id":"admin.actions.export.bulk_link","defaultMessage":"Exporter les %{model_label_plural} trouvé(e)s"},"adminActionsExportDone":{"id":"admin.actions.export.done","defaultMessage":"exporté(e)s"},"adminActionsHistoryIndexTitle":{"id":"admin.actions.history_index.title","defaultMessage":"Historique des %{model_label_plural}"},"adminActionsHistoryIndexMenu":{"id":"admin.actions.history_index.menu","defaultMessage":"Historique"},"adminActionsHistoryIndexBreadcrumb":{"id":"admin.actions.history_index.breadcrumb","defaultMessage":"Historique"},"adminActionsHistoryShowTitle":{"id":"admin.actions.history_show.title","defaultMessage":"Historique de %{model_label} '%{object_label}'"},"adminActionsHistoryShowMenu":{"id":"admin.actions.history_show.menu","defaultMessage":"Historique"},"adminActionsHistoryShowBreadcrumb":{"id":"admin.actions.history_show.breadcrumb","defaultMessage":"Historique"},"adminFormCancel":{"id":"admin.form.cancel","defaultMessage":"Annuler"},"adminFormBasicInfo":{"id":"admin.form.basic_info","defaultMessage":"Infos de base"},"adminFormRequired":{"id":"admin.form.required","defaultMessage":"Obligatoire"},"adminFormOptional":{"id":"admin.form.optional","defaultMessage":"Optionnel"},"adminFormOneChar":{"id":"admin.form.one_char","defaultMessage":"caractère"},"adminFormCharLengthUpTo":{"id":"admin.form.char_length_up_to","defaultMessage":"longueur maxi. :"},"adminFormCharLengthOf":{"id":"admin.form.char_length_of","defaultMessage":"longueur :"},"adminFormSave":{"id":"admin.form.save","defaultMessage":"Enregistrer"},"adminFormSaveAndAddAnother":{"id":"admin.form.save_and_add_another","defaultMessage":"Enregistrer et ajouter un autre"},"adminFormSaveAndEdit":{"id":"admin.form.save_and_edit","defaultMessage":"Enregister et modifier"},"adminFormAllOfTheFollowingRelatedItemsWillBeDeleted":{"id":"admin.form.all_of_the_following_related_items_will_be_deleted","defaultMessage":"Tous les éléments relatifs suivants peuvent être également supprimés ou rendus orphelins :"},"adminFormAreYouSureYouWantToDeleteTheObject":{"id":"admin.form.are_you_sure_you_want_to_delete_the_object","defaultMessage":"Êtes-vous sûr(e) de vouloir supprimer ce(tte) %{model_name}"},"adminFormConfirmation":{"id":"admin.form.confirmation","defaultMessage":"Oui, je suis sûr(e)"},"adminFormBulkDelete":{"id":"admin.form.bulk_delete","defaultMessage":"Les objets suivants vont être supprimés, ce qui pourrait supprimer ou rendre orphelin certaines de ces dépendances :"},"adminFormNewModel":{"id":"admin.form.new_model","defaultMessage":"%{name} (nouveau)"},"adminExportConfirmation":{"id":"admin.export.confirmation","defaultMessage":"Exporter vers %{name}"},"adminExportSelect":{"id":"admin.export.select","defaultMessage":"Sélectionnez les champs à exporter"},"adminExportSelectAllFields":{"id":"admin.export.select_all_fields","defaultMessage":"Sélectionner tous les champs"},"adminExportFieldsFrom":{"id":"admin.export.fields_from","defaultMessage":"Champs de %{name}"},"adminExportFieldsFromAssociated":{"id":"admin.export.fields_from_associated","defaultMessage":"Champ du (de la) %{name} associé"},"adminExportDisplay":{"id":"admin.export.display","defaultMessage":"Affichage %{name}: %{type}"},"adminExportOptionsFor":{"id":"admin.export.options_for","defaultMessage":"Options pour %{name}"},"adminExportEmptyValueForAssociatedObjects":{"id":"admin.export.empty_value_for_associated_objects","defaultMessage":"\u003cempty\u003e"},"adminExportClickToReverseSelection":{"id":"admin.export.click_to_reverse_selection","defaultMessage":"Cliquer pour inverser la sélection"},"adminExportCsvHeaderForRootMethods":{"id":"admin.export.csv.header_for_root_methods","defaultMessage":"%{name}"},"adminExportCsvHeaderForAssociationMethods":{"id":"admin.export.csv.header_for_association_methods","defaultMessage":"%{name} [%{association}]"},"adminExportCsvEncodingTo":{"id":"admin.export.csv.encoding_to","defaultMessage":"Encoder en"},"adminExportCsvEncodingToHelp":{"id":"admin.export.csv.encoding_to_help","defaultMessage":"Choisissez l'encodage de sortie. Laissez vide pour laisser les données non-encodées (%{name})"},"adminExportCsvSkipHeader":{"id":"admin.export.csv.skip_header","defaultMessage":"Aucun en-tête"},"adminExportCsvSkipHeaderHelp":{"id":"admin.export.csv.skip_header_help","defaultMessage":"Ne pas afficher d'en-tête (pas de description de champ)"},"adminExportCsvDefaultColSep":{"id":"admin.export.csv.default_col_sep","defaultMessage":","},"adminExportCsvColSep":{"id":"admin.export.csv.col_sep","defaultMessage":"Séparateur de colonne"},"adminExportCsvColSepHelp":{"id":"admin.export.csv.col_sep_help","defaultMessage":"Laisser blanc pour la valeur par défaut ('%{value}')"}});

export { defaultMessages, defaultLocale };
