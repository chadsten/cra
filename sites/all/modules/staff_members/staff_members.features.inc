<?php
/**
 * @file
 * staff_members.features.inc
 */

/**
 * Implements hook_views_api().
 */
function staff_members_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function staff_members_node_info() {
  $items = array(
    'staff_member' => array(
      'name' => t('Staff Member'),
      'base' => 'node_content',
      'description' => t('Use <em>staff members</em> to list your employees on the company staff page.'),
      'has_title' => '1',
      'title_label' => t('Name'),
      'help' => '',
    ),
  );
  return $items;
}
