import HeroSection from "@/components/layout/HeroSection";

export default function PolicyPage() {
  return (
    <>
      <HeroSection heading="Privacy Policy – Post Bulk Actions" className="" />
      <div className="container pb-8 lg:pb-[10rem]">
        <div className="flex flex-col">
          <div className="font-secondary">
            <p className="text-sm text-white mb-6">
              Last updated: June 23, 2025
            </p>

            <p className="text-white text-xl mb-3 text-justify">
              <strong>Post Bulk Actions</strong> is a Chrome extension designed
              to enhance the WordPress admin interface by providing additional
              bulk actions on the post list screen.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-white">
              Data Collection
            </h2>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              This extension does <strong>not</strong> collect, store, or
              transmit any personal data or browsing information.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-white">
              Permissions
            </h2>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              The extension requests access to certain browser APIs and
              WordPress admin pages solely to perform its intended
              functionality. Specifically:
            </p>
            <ul className="list-disc list-inside text-white text-xl mb-3 leading-8">
              <li>
                <code>tabs</code> and <code>windows</code>: Used to open
                multiple admin pages when the user triggers a bulk action.
              </li>
              <li>
                <code>host permissions</code>: Limited to WordPress admin URLs (
                <code>/wp-admin/edit.php</code>).
              </li>
            </ul>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              These permissions are only used locally and are not connected to
              any remote server or tracking system.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-white">
              Third-Party Access
            </h2>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              No data is shared with any third party. The extension runs
              entirely on your local browser environment.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-white">Contact</h2>
            <p className="text-white text-xl mb-3 leading-8 text-justify">
              If you have questions about this privacy policy or the extension
              itself, feel free to contact me at:{" "}
              <a
                href="mailto:jorgearaya474@gmail.com"
                className="underline text-blue-400"
              >
                jorgearaya474@gmail.com
              </a>
            </p>

            <p className="text-white text-xl mb-3 leading-8 text-justify">
              By using this extension, you agree to this privacy policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
