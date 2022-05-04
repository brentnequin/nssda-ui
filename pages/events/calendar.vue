<template>
    <Section name="calendar">
        <no-ssr>
            <vc-calendar
                :attributes="attributes"
                is-expanded
            >
            </vc-calendar>
        </no-ssr>
    </Section>
</template>

<script>
export default {
    data() {
        return {
            attributes: [
                {
                    dates: new Date(),
                    customData: {
                        title: "pizza time"
                    }
                }
            ]
        }
    },
}
</script>

<style>
.vc-day {
    border-right: 1px black;
    border-bottom: 1px black;
}
</style>