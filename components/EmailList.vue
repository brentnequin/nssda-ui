<template>
    <div>
        <h2 class="mb-2">Join Our Email List</h2>
        <p>Join our email list to receive weekly church updates and our bulletin.</p>
        <b-form>
            <b-row>
                <b-form-input class="email-list-input" id="emailaddress" placeholder="Email Address" required />
                <b-button class="email-list-button" type="submit" variant="primary">Subscribe</b-button>
            </b-row>
        </b-form>
    </div>
</template>

<style>
.email-list-input {
    max-width: 20em;
}
</style>