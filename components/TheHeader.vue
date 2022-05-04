<template>
    <b-container>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="/">{{siteTitle}}</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <template v-for="link in links">
                        <template v-if="link.type=='item'">
                            <template v-if="link.kind=='absolute'">
                                <b-nav-item v-bind:key="link.name" :href="link.to">
                                    {{link.name}}
                                </b-nav-item>
                            </template>
                            <template v-else>
                                <b-nav-item v-bind:key="link.name" :to="link.to">
                                    {{link.name}}
                                </b-nav-item>
                            </template>
                        </template>
                        <template v-if="link.type=='dropdown'">
                            <b-nav-item-dropdown :text="link.name" v-bind:key="link.name" right>
                                <template v-for="item in link.items">
                                    <template v-if="item.type=='divider'">
                                        <b-dropdown-divider />
                                    </template>
                                    <template v-if="item.type=='item'">
                                        <template v-if="item.kind=='absolute'">
                                            <b-dropdown-item v-bind:key="item.name" :href="item.to">
                                                {{item.name}}
                                            </b-dropdown-item>
                                        </template>
                                        <template v-else>
                                            <b-dropdown-item v-bind:key="item.name" :to="item.to">
                                                {{item.name}}
                                            </b-dropdown-item>
                                        </template>
                                    </template>
                                </template>
                            </b-nav-item-dropdown>
                        </template>
                    </template>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
import NAVLINKS from "~/static/navlinks.json"

export default {
    data() {
        return {
            siteTitle: "North Shore SDA",
            links: NAVLINKS
        }
    },
}
</script>
