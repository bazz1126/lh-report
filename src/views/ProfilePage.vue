<template>
    <b-container>
        <v-btn class="float-right" color="red lighten-1" to="/auth-home"
            >+ New URL</v-btn
        >
        <h1>Previously Tested URLs</h1>

        <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            fields: [
                {
                    key: 'Website',
                    sortable: false
                },
                {
                    key: 'Performance',
                    sortable: true
                },
                {
                    key: 'Accessibility',
                    sortable: true
                },
                {
                    key: 'Best_Practice',
                    sortable: true
                },
                {
                    key: 'SEO',
                    sortable: true
                },
                {
                    key: 'PWA',
                    sortable: true
                }
            ],
            items: [
                {
                    isActive: true,
                    Website: 'Reddit',
                    Performance: 98,
                    Accessibility: 95,
                    Best_Practice: 87,
                    SEO: 65,
                    PWA: 42
                },
                {
                    isActive: true,
                    Website: 'YouTube',
                    Performance: 82,
                    Accessibility: 89,
                    Best_Practice: 98,
                    SEO: 55,
                    PWA: 47
                },
                {
                    isActive: true,
                    Website: 'Facebook',
                    Performance: 95,
                    Accessibility: 91,
                    Best_Practice: 75,
                    SEO: 87,
                    PWA: 49
                },
                {
                    isActive: true,
                    Website: 'Thrasher',
                    Performance: 89,
                    Accessibility: 88,
                    Best_Practice: 67,
                    SEO: 56,
                    PWA: 52
                },
                {
                    isActive: true,
                    Website: 'Amazon',
                    Performance: 74,
                    Accessibility: 79,
                    Best_Practice: 78,
                    SEO: 89,
                    PWA: 66
                },
                {
                    isActive: true,
                    Website: 'Twitter',
                    Performance: 84,
                    Accessibility: 56,
                    Best_Practice: 73,
                    SEO: 67,
                    PWA: 36
                },
                {
                    isActive: true,
                    Website: 'Google',
                    Performance: 65,
                    Accessibility: 67,
                    Best_Practice: 69,
                    SEO: 66,
                    PWA: 81
                }
            ]
        };
    }
};
</script>
